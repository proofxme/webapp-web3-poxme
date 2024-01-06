"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useAccount, useBalance, useContractRead, useContractWrite, useNetwork, usePrepareContractWrite } from "wagmi";
import { useState } from "react";
import addresses from "@/contracts/addresses";
import migrationAbi from "@/contracts/abi/migration.json";
import poxmeToken from "@/contracts/abi/poxmeToken.json";
import eulerToken from "@/contracts/abi/eulerToken.json";
import { uint256ToBNBCurrency } from "@/utils/bigNumber";
import BigNumber from "bignumber.js";

export default function TokenMigration() {
  const {address} = useAccount();
  const [depositAmount, setDepositAmount] = useState(BigInt(4001 * 10 ** 18));
  const {chain} = useNetwork();

  // Old Tokens
  const {
    data: eulerBalance,
  } = useBalance({
    address: address,
    token: addresses(chain?.id)['OldToken']
  })

  const {data: oldTokenAllowance} = useContractRead({
    address: addresses(chain?.id)['OldToken'],
    abi: eulerToken.abi,
    functionName: 'allowance',
    args: [address, addresses(chain?.id)['PoXMigration']],
  })

  const {config: approveOldTokenConfig} = usePrepareContractWrite({
    address: addresses(chain?.id)['OldToken'],
    abi: eulerToken.abi,
    functionName: 'approve',
    args: [addresses(chain?.id)['PoXMigration'], BigInt(100_000_000 * 10 ** 18)],
  })

  const {
    data: eulerApprovedAmount,
    isLoading: isLoadingOldApproval,
    isSuccess: isSuccessOldApproval,
    write: approveOldToken
  } = useContractWrite(approveOldTokenConfig)

  const {data: poxmeAllowance} = useContractRead({
    address: addresses(chain?.id)['PoxmeToken'],
    abi: poxmeToken.abi,
    functionName: 'allowance',
    args: [address, addresses(chain?.id)['PoXMigration']],
  })

  const {config: approveNewTokenConfig} = usePrepareContractWrite({
    address: addresses(chain?.id)['PoxmeToken'],
    abi: poxmeToken.abi,
    functionName: 'approve',
    args: [addresses(chain?.id)['PoXMigration'], BigInt(100_000_000 * 10 ** 18)],
  })

  const {
    data: approvedPoxmeAmount,
    isLoading: isLoadingPoxmeApproval,
    isSuccess: isSuccessPoxmeApproval,
    write: approvePoxmeToken
  } = useContractWrite(approveNewTokenConfig)

  // Migration Contract
  const {data: isMigrationActive} = useContractRead({
    address: addresses(chain?.id)['PoXMigration'],
    abi: migrationAbi.abi,
    functionName: 'isMigrationActive',
    args: [],
  })

  const {data: isTokenMigrationActive} = useContractRead({
    address: addresses(chain?.id)['PoXMigration'],
    abi: migrationAbi.abi,
    functionName: 'isTokenMigrationActive',
    args: [],
  })

  const {data: userInfo}: {
    data: {
      deposited: BigNumber;
      minted: BigNumber;
    } | undefined;
  } = useContractRead({
    address: addresses(chain?.id)['PoXMigration'],
    abi: migrationAbi.abi,
    functionName: 'getUserInfo',
    args: [address],
  })

  const {config: depositTokensConfig} = usePrepareContractWrite({
    address: addresses(chain?.id)['PoXMigration'],
    abi: migrationAbi.abi,
    functionName: 'deposit',
    args: [depositAmount],
  })

  const {
    data: depositedAmount,
    isLoading: isLoadingDeposit,
    isSuccess: isSuccessDeposit,
    write: depositTokens
  } = useContractWrite(depositTokensConfig)

  const {config: claimTokensConfig} = usePrepareContractWrite({
    address: addresses(chain?.id)['PoXMigration'],
    abi: migrationAbi.abi,
    functionName: 'claimTokens',
    args: [],
  })

  const {
    data: claimedAmount,
    isLoading: isLoadingClaim,
    isSuccess: isSuccessClaim,
    write: claimTokens
  } = useContractWrite(claimTokensConfig)

  const calculateAmounts = () => {
    const available = Number(eulerBalance?.formatted)
    const deposited = uint256ToBNBCurrency(userInfo?.deposited as unknown as string)
    const claimed = uint256ToBNBCurrency(userInfo?.minted as unknown as string)
    const pending = Number(deposited) - Number(claimed)
    return {deposited, claimed, pending, available}
  }

  const {deposited, claimed, pending, available} = calculateAmounts()

  return <div>
    <Card className="mb-4 my-3">
      <CardHeader>
        <h3 className="text-lg font-semibold">Deposit <span style={{color: 'blue'}}>$EULER</span></h3>
      </CardHeader>
      <CardContent>
        <p className="text-gray-500 pb-6">Deposit <span style={{color: 'blue'}}>$EULER</span> to claim
          the new token</p>
        <p className="text-gray-500">You have <strong
          style={{color: 'black'}}>{Number(eulerBalance?.formatted).toFixed(2)}</strong> <span
          style={{color: 'blue'}}>$EULER</span> to
          migrate</p>
        <div className="space-x-3 mb-6">
          {oldTokenAllowance as number > 0 ? <div className="flex justify-between pt-3">
            <Input placeholder="Amount" type="number" onChange={(e) => {
              const value = BigInt(Number(e.target.value) * 10 ** 18)
              setDepositAmount(value);
            }}/>
            <Button disabled={depositAmount === BigInt(0) || !isMigrationActive}
                    className="pt-3 mt-4inline-flex items-center rounded-md border border-transparent bg-gray-900 ml-2 px-2.5 py-0.5 text-xs font-semibold text-gray-50 shadow transition-colors hover:bg-gray-900/80 focus:outline-none focus:ring-2 focus:ring-gray-950 focus:ring-offset-2 dark:border-gray-800 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/80 dark:focus:ring-gray-300"
                    onClick={() => depositTokens?.()}>Deposit</Button>
          </div> : <Button
            className="mt-4inline-flex items-center rounded-md border border-transparent bg-gray-900 px-2.5 py-0.5 text-xs font-semibold text-gray-50 shadow transition-colors hover:bg-gray-900/80 focus:outline-none focus:ring-2 focus:ring-gray-950 focus:ring-offset-2 dark:border-gray-800 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/80 dark:focus:ring-gray-300"
            onClick={() => approveOldToken?.()}
          >
            Approve Contract
          </Button>
          }
        </div>
      </CardContent>
    </Card>
    <Card>
      <CardHeader>
        <h3 className="text-lg font-semibold">Claim new <strong style={{color: 'purple'}}>$POXME</strong> Tokens</h3>
      </CardHeader>
      <CardContent>
        <div className="space-x-3 mb-6">
          <p className="text-gray-500">
            You have deposited:
            <span
              className="font-bold text-gray-900"> {deposited} tokens</span>
          </p>
          <p className="text-gray-500 mt-2">
            You have claimed:
            <span
              className="font-bold text-gray-900"> {claimed} tokens </span>
          </p>
          <p className="text-gray-500 mt-2">
            You can claim:
            <span
              className="font-bold text-gray-900"> {pending} tokens </span>
          </p>
        </div>
        <div className="space-x-3 mb-6">
          {oldTokenAllowance as number > 0 ? <div className="flex justify-center pt-3">
            <Button disabled={depositAmount === BigInt(0) || !isMigrationActive}
                    className="mt-4inline-flex items-center rounded-md border border-transparent bg-gray-900 ml-2 px-2.5 py-0.5 text-xs font-semibold text-gray-50 shadow transition-colors hover:bg-gray-900/80 focus:outline-none focus:ring-2 focus:ring-gray-950 focus:ring-offset-2 dark:border-gray-800 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/80 dark:focus:ring-gray-300"
                    onClick={() => claimTokens?.()}>Claim Tokens</Button>
          </div> : <Button
            className="mt-4inline-flex items-center rounded-md border border-transparent bg-gray-900 px-2.5 py-0.5 text-xs font-semibold text-gray-50 shadow transition-colors hover:bg-gray-900/80 focus:outline-none focus:ring-2 focus:ring-gray-950 focus:ring-offset-2 dark:border-gray-800 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/80 dark:focus:ring-gray-300"
            onClick={() => approveOldToken?.()}
          >
            Approve Contract
          </Button>
          }
        </div>
      </CardContent>
    </Card>
  </div>;
}
