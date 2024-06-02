'use server';

import 'server-only';
import { config } from "@/lib/logto-config";
import { cookies } from "next/headers";
import { ICredential } from "app/api/interfaces/credential";
import { verifyMessage } from "@wagmi/core";
import { createConfig } from "wagmi";
import { mainnet } from "viem/chains";
import { http } from "viem";

export async function verifyWeb3Credential(data: any) {
  const web3config = createConfig({
    chains: [mainnet],
    transports: {
      [mainnet.id]: http(),
    },
  })

  const {provider, handler, signed, nonce, message} = data;

  const verify = await verifyMessage(web3config, {
    address: handler,
    message: message,
    signature: signed,
  })

  if (!verify) {
    return 'Verification failed, please try again.';
  }

  const response = await fetch(`${config.baseUrl}/api/credentials?id=${provider}`, {
    method: 'PUT',
    headers: {
      cookie: cookies().toString(),
    },
    body: JSON.stringify({...data, code: nonce}),
  });

  if (!response.ok) {
    if (response.status === 403) {
      return 'Access denied to method, requires write:credential scope.';
    }
    if (response.status === 423) {
      return 'Verification failed, please try again.'
    }
    throw new Error('Something went wrong!');
  }

  // eslint-disable-next-line no-restricted-syntax
  const body = (await response.json()) as { data: ICredential[] };

  return body.data;
}
