// app/sign-in.tsx
'use client';

import { useRouter } from 'next/navigation';
import { signIn } from '@/lib/logto';
import { Button } from "@/components/ui/button";

const SignIn = () => {
  const router = useRouter();

  const handleClick = async () => {
    const redirectUrl = await signIn();

    router.push(redirectUrl);
  };

  return (
    <Button
      className="w-full sm:w-auto"
      onClick={handleClick}
      disabled
    >
      Sign in
    </Button>);
};

export default SignIn;
