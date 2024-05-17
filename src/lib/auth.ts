import { NextAuthOptions } from 'next-auth';
import TwitterProvider from 'next-auth/providers/twitter';

export const authOptions: NextAuthOptions = {
  providers: [
    TwitterProvider({
      clientId: process.env.TWITTER_CLIENT_ID!,
      clientSecret: process.env.TWITTER_CLIENT_SECRET!,
      version: '2.0',
      authorization: {
        params: {
          scope: 'users.read tweet.read',
          response_type: 'code',
          prompt: 'consent',
        },
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET!,
  callbacks: {
    async jwt({token, account}) {
      if (account) {
        token.accessToken = account.access_token;
      }
      return token;
    },
    async session({session, token}) {
      session.accessToken = token.accessToken;
      return session;
    },
  },
};
