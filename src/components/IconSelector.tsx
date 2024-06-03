import { TwitterIcon } from "@/components/socialIconsSection";
import { MailIcon } from "app/(dashboard)/credentials/icons";
import { WalletIcon } from "app/(dashboard)/credentials/new/credentials-list";

interface IconProps {
  iconType: string;
}

const IconSelector: React.FC<IconProps> = ({iconType}) => {
  switch (iconType.toLowerCase()) {
    case 'twitter':
      return <TwitterIcon/>;
    case 'email':
      return <MailIcon/>;
    case 'web3':
      return <WalletIcon/>;
    default:
      return null;
  }
};

export default IconSelector;
