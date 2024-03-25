import LogtoClient from "@logto/next/server-actions";

export const config = {
  appId: process.env.LOGTO_APP_ID!,
  appSecret: process.env.LOGTO_APP_SECRET!,
  endpoint: process.env.LOGTO_ENDPOINT!,
  baseUrl: process.env.LOGTO_BASE_URL!, // Change to your own base URL
  cookieSecret: process.env.LOGTO_COOKIE_SECRET!, // Auto-generated 32 digit secret
  cookieSecure: process.env.NODE_ENV === 'production',
  resources: process.env.RESOURCES?.split(','),
  scopes: process.env.SCOPES?.split(','),
};

export const logtoClient = new LogtoClient(config);
