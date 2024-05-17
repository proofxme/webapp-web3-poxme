import { TwitterIcon } from "@/components/socialIconsSection";
import { MailIcon } from "app/(dashboard)/credentials/icons";

interface IconProps {
  iconType: string;
}

const IconSelector: React.FC<IconProps> = ({iconType}) => {
  switch (iconType) {
    case 'twitter':
      return <TwitterIcon/>;
    case 'email':
      return <MailIcon/>;
    default:
      return null;
  }
};

export default IconSelector;
