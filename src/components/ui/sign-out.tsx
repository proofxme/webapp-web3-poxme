'use client';

import { useRouter } from 'next/navigation';
import { signOut } from "@/lib/logto";

const SignOut = () => {
  const router = useRouter();

  const handleClick = async () => {
    const redirectUrl = await signOut();

    router.push(redirectUrl);
  };

  return <button onClick={handleClick}>Sign Out</button>;
};

export default SignOut;
