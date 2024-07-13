import React from "react";
import AddressShortener from "@/components/ui/address-shortener";
import { ICredential } from "app/api/interfaces/credential";

interface IconProps {
  credential: ICredential;
}

const NameSelector: React.FC<IconProps> = ({credential}) => {
  switch (credential.kind) {
    case 'web3':
      return <AddressShortener address={credential.handler}/>
    case 'telegram':
      return <span className="font-medium">{credential.username}</span>;
    default:
      return <span className="font-medium">{credential.handler}</span>;
  }
};

export default NameSelector;
