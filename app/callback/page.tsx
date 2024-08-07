'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { handleSignIn } from '@/lib/logto';
import React, { useEffect } from 'react';
import LogoPoxme from "@/logo-poxme";

export default function Callback() {
  const router = useRouter();
  const redirectinRef = React.useRef(false);
  const searchParams = useSearchParams()

  useEffect(() => {
    if (redirectinRef.current) {
      return;
    }
    redirectinRef.current = true;
    handleSignIn(searchParams).then(() => {
      router.push('/dashboard');
    });
  }, [router, searchParams, redirectinRef]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="w-16 h-16 text-gray-900 dark:text-gray-100"/>
      <div className={"w-16 h-16"}>
        <LogoPoxme/>
      </div>
      <h2 className="mt-6 text-2xl font-semibold text-gray-900 dark:text-gray-100">Signing in...</h2>
      <p className="mt-2 text-gray-700 dark:text-gray-300">
        Please wait while we are processing your request. Do not close or refresh the page.
      </p>
    </div>
  )
}

