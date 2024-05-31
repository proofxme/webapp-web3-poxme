'use client';

import { signIn, signOut, useSession } from 'next-auth/react';
import { Button } from '@/components/ui/button';

const TwitterCredential: React.FC = () => {
  const {data: session, status} = useSession();

  const handleLogin = async () => {
    try {
      await signIn('twitter', {callbackUrl: '/credentials/callback'});
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut();
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  const handleCallback = (data: any) => {
    console.log('Callback data:', data);
  };

  return (
    <div className="flex justify-center items-center">
      <Button variant="default" onClick={handleLogin}>
        Sign in with Twitter
      </Button>
    </div>
  );
};

export default TwitterCredential;
