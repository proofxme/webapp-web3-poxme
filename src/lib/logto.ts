'use server';

// libraries/logto.js
import { cookies } from 'next/headers';
import { config, logtoClient } from "@/lib/logto-config";

const cookieName = `logto:${config.appId}`;

const setCookies = (value?: string) => {
  if (value === undefined) {
    return;
  }

  cookies().set(cookieName, value, {
    maxAge: 14 * 3600 * 24,
    secure: config.cookieSecure,
  });
};

const getCookie = () => {
  return cookies().get(cookieName)?.value ?? '';
};

export const signIn = async () => {
  const {url, newCookie} = await logtoClient.handleSignIn(
    getCookie(),
    `${config.baseUrl}/callback`
  );

  setCookies(newCookie);

  return url;
};

export const handleSignIn = async (searchParams: Record<string, string>) => {
  // Convert searchParams object into a query string.
  const search = new URLSearchParams(searchParams).toString();

  const newCookie = await logtoClient.handleSignInCallback(
    getCookie(),
    `${config.baseUrl}/callback?${search}`
  );

  setCookies(newCookie);
};

export const signOut = async () => {
  const url = await logtoClient.handleSignOut(getCookie(), `${config.baseUrl}`);

  setCookies('');

  return url;
};

export const getLogtoContext = async () => {
  return await logtoClient.getLogtoContext(getCookie(), {
    getAccessToken: true,
  });
};

