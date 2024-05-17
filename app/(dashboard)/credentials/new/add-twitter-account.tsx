'use client';

import { signIn, signOut, useSession } from 'next-auth/react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const TwitterLoginComponent: React.FC = () => {
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

  if (status === 'loading') {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  if (!session) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Button variant="default" onClick={handleLogin}>
          Sign in with Twitter
        </Button>
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <Avatar className="mb-4">
        <AvatarImage src={session.user?.image || ''} alt={session.user?.name || ''}/>
        <AvatarFallback>
          {session.user?.name?.[0].toUpperCase() || 'U'}
        </AvatarFallback>
      </Avatar>
      <p className="text-lg font-medium mb-4">
        Logged in as: {session.user?.name}
      </p>
      <Button variant="destructive" onClick={handleLogout}>
        Sign out
      </Button>
    </div>
  );
};

export default TwitterLoginComponent;
