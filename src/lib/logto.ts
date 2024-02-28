// libraries/logto.js
'use server';

import LogtoClient from '@logto/next/server-actions';
import { cookies } from 'next/headers';

const config = {
  appId: process.env.LOGTO_APP_ID!,
  appSecret: process.env.LOGTO_APP_SECRET!,
  endpoint: process.env.LOGTO_ENDPOINT!,
  baseUrl: process.env.LOGTO_BASE_URL!, // Change to your own base URL
  cookieSecret: process.env.LOGTO_COOKIE_SECRET!, // Auto-generated 32 digit secret
  cookieSecure: process.env.NODE_ENV === 'production',
};

const logtoClient = new LogtoClient(config);

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
  const url = await logtoClient.handleSignOut(getCookie(), `${config.baseUrl}/`);

  setCookies('');

  return url;
};

export const getLogtoContext = async () => {
  return await logtoClient.getLogtoContext(getCookie());
};
