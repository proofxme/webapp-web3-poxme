'use client'

import { Button } from "@/components/ui/button";
import React, { useCallback, useState } from "react";
import { TrashIcon } from "@radix-ui/react-icons";
import { ICredential } from "app/api/interfaces/credential";
import { deleteCredentials } from "app/api/credentials/delete-credentials";

export default function DeleteCredentialButton(props: { action: () => void, entity: ICredential }) {
  const {entity} = props;
  const [loading, setLoading] = useState(false)

  const confirmDelete = useCallback(async () => {
    setLoading(true);
    if (confirm('Are you sure you want to delete this item?')) {
      await deleteCredentials(entity.provider)
      props.action()
    }
    setLoading(false);
  }, [props])

  return <Button className="h-8 w-8" size="icon" onClick={confirmDelete} disabled={loading}>
    <TrashIcon className="h-4 w-4"/>
    <span className="sr-only">Delete</span>
  </Button>;
}
