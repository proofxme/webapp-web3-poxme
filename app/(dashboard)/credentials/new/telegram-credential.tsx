'use client';

import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

interface TelegramLoginButtonProps {
  botId: number;
  buttonSize?: 'large' | 'medium' | 'small';
  cornerRadius?: number;
  requestAccess?: string;
  usePic?: boolean;
  lang?: string;
  widgetVersion?: number;
}

interface TelegramLoginWidget {
  auth: (options: {
    bot_id: number;
    request_access?: string;
    lang?: string;
  }, callback: (user: any) => void) => void;
}

declare global {
  interface Window {
    Telegram?: {
      Login: {
        auth: TelegramLoginWidget['auth'];
      };
    };
  }
}

const TelegramLoginButton: React.FC<TelegramLoginButtonProps> = ({
                                                                   botId,
                                                                   buttonSize = 'large',
                                                                   cornerRadius,
                                                                   requestAccess = 'write',
                                                                   usePic = true,
                                                                   lang = 'en',
                                                                   widgetVersion = 9,
                                                                 }) => {
  const scriptRef = useRef<HTMLScriptElement | null>(null);
  const router = useRouter();

  const handleLogin = async () => {
    try {
      if (window.Telegram && window.Telegram.Login) {
        window.Telegram.Login.auth(
          {
            bot_id: botId,
            request_access: requestAccess,
            lang: lang,
          },
          (user) => {
            if (user) {
              console.log('Telegram login successful:', user);
              // Redirect to the callback page with user data
              const queryParams = new URLSearchParams({
                id: user.id.toString(),
                first_name: user.first_name,
                last_name: user.last_name || '',
                username: user.username || '',
                photo_url: user.photo_url || '',
                auth_date: user.auth_date.toString(),
                hash: user.hash,
              }).toString();
              router.push(`/credentials/callback/telegram?${queryParams}`);
            } else {
              console.log('Telegram login was canceled by the user');
            }
          }
        );
      } else {
        console.error('Telegram Login widget is not available');
      }
    } catch (error) {
      console.error('Error initiating Telegram login:', error);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined' && !scriptRef.current) {
      const script = document.createElement('script');
      script.src = `https://telegram.org/js/telegram-widget.js?${widgetVersion}`;
      script.async = true;
      script.onload = () => {
        console.log('Telegram widget script loaded');
      };

      document.body.appendChild(script);
      scriptRef.current = script;
    }

    return () => {
      if (scriptRef.current) {
        document.body.removeChild(scriptRef.current);
      }
    };
  }, [widgetVersion]);

  return (
    <div className="flex justify-center items-center">
      <Button variant="default" onClick={handleLogin}>
        Sign in with Telegram
      </Button>
    </div>
  );
};

export default TelegramLoginButton;
