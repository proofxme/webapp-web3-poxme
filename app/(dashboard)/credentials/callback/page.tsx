'use server';

import { getServerSession } from 'next-auth';
import { authOptions } from "@/lib/auth";
import { createCredential } from "app/api/credentials/create-credentials";
import { revalidatePath } from "next/cache";
import { redirect, RedirectType } from "next/navigation";

export default async function TwitterCallbackPage() {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.accessToken) {
      return <div>Error: No access token available</div>;
    }

    const twitterProfile = await fetchTwitterProfile(session.accessToken);

    // create a new credential with the twitter information
    const credential = {
      provider: `twitter~${twitterProfile.id}`,
      handler: twitterProfile.username,
      kind: 'twitter',
      verified: true,
      accessToken: session.accessToken,
      twitterProfile,
      visibility: true
    }

    await createCredential(credential);
  } catch (error) {
    console.error('Error handling Twitter callback:', error);
    return <div>Error handling Twitter callback</div>;
  }
  revalidatePath(`/credentials`);
  redirect('/credentials', RedirectType.push);
}

async function fetchTwitterBearerToken(accessToken: string): Promise<string> {
  const response = await fetch('https://api.twitter.com/oauth2/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: `Basic ${Buffer.from(`${process.env.TWITTER_CLIENT_ID}:${process.env.TWITTER_CLIENT_SECRET}`).toString('base64')}`,
    },
    body: 'grant_type=client_credentials',
  });
  const {access_token} = await response.json();
  return access_token;
}

async function fetchTwitterProfile(bearerToken: string) {
  try {
    const response = await fetch('https://api.twitter.com/2/users/me', {
      headers: {
        Authorization: `Bearer ${bearerToken}`,
      },
    });
    const data = await response.json();
    return data.data;
  } catch (e) {
    console.error('Error fetching Twitter profile:', e);
    return {};
  }
}

// Optional: If you want to redirect to a protected route
// function redirectToProtectedRoute(twitterProfile: any) {
//   console.log('Redirecting to protected route...');
//   redirect('/protected-route');
// }
