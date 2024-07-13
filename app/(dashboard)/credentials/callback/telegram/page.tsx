import { createHash, createHmac } from 'crypto';
import { createCredential } from "app/api/credentials/create-credentials";
import { revalidatePath } from "next/cache";
import { redirect, RedirectType } from "next/navigation";

const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;

interface TelegramUser {
  id: string;
  first_name: string;
  last_name?: string;
  username?: string;
  photo_url?: string;
  auth_date: string;
  hash: string;
}

function verifyTelegramData(data: Omit<TelegramUser, 'hash'>, hash: string): boolean {
  const secretKey = createHash('sha256').update(BOT_TOKEN || '').digest();
  const dataCheckString = Object.keys(data)
    .sort()
    .map(key => `${key}=${data[key as keyof typeof data]}`)
    .join('\n');

  const hmac = createHmac('sha256', secretKey).update(dataCheckString).digest('hex');
  return hmac === hash;
}

const TelegramCallbackPage = async ({searchParams}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) => {
  try {
    const queryParams = Object.fromEntries(Object.entries(searchParams).map(([key, value]) => [key, Array.isArray(value) ? value[0] : value]));
    const {hash, ...userData} = queryParams as unknown as TelegramUser;

    if (!hash || !verifyTelegramData(userData, hash)) {
      throw new Error('Invalid data received from Telegram');
    }

    // Check if the auth_date is not too old (e.g., within the last hour)
    const currentTime = Math.floor(Date.now() / 1000);
    if (currentTime - parseInt(userData.auth_date, 10) > 3600) {
      throw new Error('Authentication data is too old');
    }

    // Create a new credential with the Telegram information
    const credential = {
      provider: `telegram~${userData.id}`,
      handler: userData.id,
      username: userData.username,
      kind: 'telegram',
      verified: true,
      picture: userData.photo_url,
      last_name: userData.last_name,
      visibility: true
    };

    await createCredential(credential);

    // Revalidate the credentials path
    revalidatePath(`/credentials`);

    // Redirect to the credentials page
    redirect('/credentials', RedirectType.push);
  } catch (error) {
    console.error('Error handling Telegram callback:', error);
    // You might want to redirect to an error page or show an error message
    redirect('/credentials?error=telegram_auth_failed', RedirectType.push);
  }

  return <div>Processing Telegram callback...</div>;
};

export default TelegramCallbackPage;
