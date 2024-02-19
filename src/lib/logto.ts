// libraries/logto.js
'use server';

import LogtoClient from '@logto/next/server-actions';
import { cookies } from 'next/headers';

const config = {
  endpoint: 'https://9lgfym.logto.app/',
  appId: 'zyiprdo7cbwfmdoocidir',
  appSecret: 'dA9CgrID0XgrfsVkQ9MMmxDncRMvgdyi',
  baseUrl: 'http://localhost:3000', // Change to your own base URL
  cookieSecret: 'jlDPd8tX5aZDLLAmENhoh0C1C0hmofQi', // Auto-generated 32 digit secret
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

export const getLogtoContext = async () => {
  return await logtoClient.getLogtoContext(getCookie());
};
