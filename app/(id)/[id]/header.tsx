'use client';

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { MailIcon } from "app/(dashboard)/credentials/icons";
import { IIdentityCore } from "app/api/interfaces/identity";

const Header = ({identity}: { identity: IIdentityCore }) => {
  return (
    <header className="bg-gray-900 text-white py-6 px-4 md:px-2">
      <div className="container mx-auto flex items-center max-w-6xl">
        <Avatar className="mr-4">
          <AvatarImage alt="User Avatar" src={`${identity.avatar}`}/>
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
        <div>
          <h1 className="text-2xl font-bold">{identity.displayName}</h1>
          <p className="text-gray-400">@{identity.handlerName}</p>
        </div>
        <div className="ml-auto flex gap-4">
          <Button className="bg-black text-white" size="sm" variant="outline" disabled>
            <MailIcon className="w-4 h-4"/>
          </Button>
        </div>
      </div>
    </header>
  )
}

export default Header;
