'use client'

import { Button } from "@/components/ui/button";
import React, { JSX, SVGProps, useCallback } from "react";
import { IIdentity } from "app/api/interfaces/identity";

export default function DeleteButton(props: { action: (identity: IIdentity) => void, identity: IIdentity }) {
  const confirmDelete = useCallback(() => {
    if (confirm('Are you sure you want to delete this item?')) {
      props.action(props.identity);
    }
  }, [])

  return <Button className="h-8 w-8" size="icon" onClick={confirmDelete}>
    <Trash2Icon className="h-4 w-4"/>
    <span className="sr-only">Delete</span>
  </Button>;
}

function Trash2Icon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 6h18"/>
      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/>
      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/>
      <line x1="10" x2="10" y1="11" y2="17"/>
      <line x1="14" x2="14" y1="11" y2="17"/>
    </svg>
  )
}

