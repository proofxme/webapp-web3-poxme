'use client';

import { signIn, signOut, useSession } from 'next-auth/react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

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
      {!session ? (
        <Button variant="default" onClick={handleLogin}>
          Sign in with Twitter
        </Button>
      ) : (
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
          <Avatar>
            <AvatarImage src={session.user?.image || ''} alt={session.user?.name || ''}/>
            <AvatarFallback>
              {session.user?.name?.[0].toUpperCase() || 'U'}
            </AvatarFallback>
          </Avatar>
          <p className="text-lg font-medium">Logged in as: {session.user?.name}</p>
          <Button variant="destructive" onClick={handleLogout}>
            Sign out
          </Button>
        </div>
      )}
    </div>
  );
};

export default TwitterCredential;
