'use client'

import { Button } from "@/components/ui/button";
import React, { useCallback, useState } from "react";
import { deleteIdentity } from "app/api/identities/delete-identity";
import { TrashIcon } from "@radix-ui/react-icons";

export default function DeleteButton(props: { action: () => void, entity: any }) {
  const [loading, setLoading] = useState(false)

  const confirmDelete = useCallback(async () => {
    setLoading(true);
    if (confirm('Are you sure you want to delete this item?')) {
      await deleteIdentity(props.entity)
      props.action()
    }
    setLoading(false);
  }, [props])

  return <Button className="h-8 w-8" size="icon" onClick={confirmDelete} disabled={loading}>
    <TrashIcon className="h-4 w-4"/>
    <span className="sr-only">Delete</span>
  </Button>;
}
