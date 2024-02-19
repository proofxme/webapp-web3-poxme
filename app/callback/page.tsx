'use client';

import { useRouter } from 'next/navigation';
import { handleSignIn } from '@/lib/logto';
import React, { useEffect } from 'react';

type Props = {
  searchParams: Record<string, string>;
};

export default function Callback({searchParams}: Props) {
  const router = useRouter();
  const redirectinRef = React.useRef(false);

  useEffect(() => {
    if (redirectinRef.current) {
      return;
    }
    redirectinRef.current = true;
    handleSignIn(searchParams).then(() => {
      router.push('/dashboard');
    });
  }, [router, searchParams]);

  return <div>Signing in...</div>;
}
