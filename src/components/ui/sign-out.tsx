'use client';

import { useRouter } from 'next/navigation';
import { signOut } from "@/lib/logto";
import { Button } from "@/components/ui/button";
import React from "react";
import { ExitIcon } from "@radix-ui/react-icons";

const SignOut = (props: { onlyIcon?: boolean }) => {
  const {onlyIcon} = props;
  const router = useRouter();

  const handleClick = async () => {
    const redirectUrl = await signOut();

    router.push(redirectUrl);
  };

  return (
    <>
      {onlyIcon ? (
        <Button className="h-8 w-8" size="icon" onClick={handleClick}>
          <ExitIcon className="h-4 w-4"/>
          <span className="sr-only">Sign Out</span>
        </Button>) : (
        <Button onClick={handleClick}>
          Sign Out
        </Button>
      )}
    </>)
};

export default SignOut;
