'use client';

import React, { useState } from "react";
import { IIdentity } from "app/api/interfaces/identity";
import { Switch } from "@/components/ui/switch";

export default function ReceiveMessages(props: {
  action: (entity: IIdentity, value: boolean) => void,
  entity: IIdentity
}) {
  const {entity, action} = props;
  const [active, setActive] = useState(entity.active);

  const updateActive = async (checked: any) => {
    try {
      await action(entity, checked);
      setActive(checked);
    } catch (error) {
      console.error('Failed to update identity.');
    }
  }

  return (
    <Switch
      id="receive-messages"
      key={entity.provider}
      checked={active}
      // Correctly handle the change event to extract the boolean value
      onCheckedChange={(checked) => updateActive(checked)}
    />
  );
}
