import { Badge } from "@/components/ui/badge";
import { IIdentity, IIdentityCore, IIdentityCredential, IIdentityLink } from "app/api/interfaces/identity";
import Header from "app/(id)/[id]/header";
import { MailIcon } from "app/(dashboard)/credentials/icons";
import { getProfile } from "app/api/profiles/get-profile";
import { Metadata, ResolvingMetadata } from 'next';
import LinkCard from "app/(id)/[id]/link-card";
import { TwitterIcon } from "@/components/socialIconsSection";
import EmailList from "app/(id)/[id]/email-card";
import TwitterList from "app/(id)/[id]/twitter-card";
import WalletList from "app/(id)/[id]/wallet-card";

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  {params, searchParams}: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const id = params.id;
  let identity = await getProfile(params.id);

  if (typeof identity === 'string') {
    identity = [];
  }

  const coreIdentity = identity.find((i: IIdentity) => i.content === 'core') as IIdentityCore;

  const previousImages = (await parent).openGraph?.images || [];
  return {
    metadataBase: new URL('https://pox.me/'),
    title: `${coreIdentity?.handlerName || 'Identity'} | Proof of X`,
    description: coreIdentity?.bio || 'Proof of X | Identity',
    openGraph: {
      title: `${coreIdentity?.handlerName || 'Identity'} | Proof of X`,
      description: coreIdentity?.bio || 'Proof of X | Identity',
      url: `https://pox.me/${id}`,
      siteName: "Proof of X",
      images: [
        {
          url: "/images/home-hero.jpg",
          width: 1800,
          height: 1600,
          alt: "A cool fingerprint image",
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `Proof of X | ${coreIdentity?.handlerName || 'Identity'}`,
      description: coreIdentity?.bio || 'Proof of X | Identity',
      creator: "@proofxme",
      images: ["/images/home-hero.jpg"],
    },
  };
}

export default async function Identity({params}: { params: { id: string } }) {
  const identity = await getProfile(params.id);

  if (typeof identity === 'string') {
    return <div>{identity}</div>
  }

  const id = identity.find((i: IIdentity) => i.content === 'core') as IIdentityCore;
  const emails = identity.filter((i: IIdentity) => i.content.includes('email~')) as unknown as IIdentityCredential[];
  const twitters: IIdentityCredential[] = identity.filter((i: any) => (i.content.includes('twitter~')) && (i.displayValue.includes('*'))) as unknown as IIdentityCredential[];
  const wallets: IIdentityCredential[] = identity.filter((i: any) => (i.content.includes('web3~'))) as unknown as IIdentityCredential[];
  const links = identity.filter((i: IIdentity) => i.content.includes('link~')) as unknown as IIdentityLink[];

  if (!id) {
    return (
      <div className="flex w-full min-h-screen items-start py-4 gap-4 flex-col">
        <div className="container mx-auto px-4">
          <div className="grid gap-4">
            <div className="border rounded-lg shadow-sm p-4">
              <h1 className="font-semibold text-lg md:text-2xl">Identity Not Found</h1>
              <p>The identity you are looking for does not exist or has been deleted.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div key="1" className="flex flex-col min-h-screen bg-white dark:bg-gray-900">
      <Header identity={id}/>
      <main className="flex-1 py-6 md:px-2 lg:px-2 px-4">
        <div className="max-w-6xl mx-auto grid gap-6 grid-cols-1 lg:grid-cols-3">
          {/* Left Column */}
          <div className="space-y-6 lg:col-span-2">
            {/* Bio */}
            <div className="space-y-2">
              <h2 className="text-xl font-bold">Bio</h2>
              <p className="text-gray-500 dark:text-gray-400">{id.bio}</p>
            </div>

            {/* Badges */}
            <div className="space-y-2">
              <h2 className="text-xl font-bold">Badges</h2>
              <div className="flex flex-wrap gap-2">
                {emails.length > 0 && (
                  <Badge key="email-verified">
                    <MailIcon/>{' '}
                    <span className="py-2 ml-2">Email Verified</span>
                  </Badge>
                )}
                {twitters.length > 0 && (
                  <Badge key="twitter-verified">
                    <TwitterIcon/>{' '}
                    <span className="py-2 ml-2">Twitter Verified</span>
                  </Badge>
                )}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Links */}
            {links.length > 0 && (
              <div className="space-y-2">
                <h2 className="text-xl font-bold">Links</h2>
                <LinkCard links={links}/>
              </div>
            )}
            {/* Emails */}
            {emails.length > 0 && (
              <div className="space-y-2">
                <EmailList emails={emails}/>
              </div>
            )}
            {twitters.length > 0 && (
              <div className="space-y-2">
                <TwitterList twitters={twitters}/>
              </div>
            )}
            {wallets.length > 0 && (
              <div className="space-y-2">
                <WalletList wallets={wallets}/>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
