"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  mainnet,
  useAccount,
  useBalance,
  useContractRead,
  useContractWrite,
  useNetwork,
  usePrepareContractWrite,
  useWalletClient
} from "wagmi";
import { useCallback, useEffect, useState } from "react";
import addresses from "@/contracts/addresses";
import migrationAbi from "@/contracts/abi/migration.json";
import poxmeToken from "@/contracts/abi/poxmeToken.json";
import eulerToken from "@/contracts/abi/eulerToken.json";
import { getBigNumberCurrencyLabel, uint256ToBNBCurrency } from "@/utils/bigNumber";
import BigNumber from "bignumber.js";
import { watchBlockNumber } from "@wagmi/core";
import { watchAsset } from "viem/actions";
import { createWalletClient, custom } from "viem";
import Countdown from "@/components/widgets/countdown";

export default function TokenMigration() {
  const {address, status} = useAccount();
  const [visibleAmount, setVisibleAmount] = useState(BigInt(0));
  const [depositAmount, setDepositAmount] = useState(BigInt(0));
  const {chain} = useNetwork();
  const walletClient = useWalletClient();
// State to hold the latest block number
  const [blockNumber, setBlockNumber] = useState(0);

  useEffect(() => {
    // Subscribe to block number updates
    const unwatch = watchBlockNumber({chainId: chain?.id, listen: true}, (blockNumber) => {
      setBlockNumber(Number(blockNumber));
    });

    // Unsubscribe from the block number updates when the component unmounts
    return () => {
      unwatch();
    };
  }, [chain?.id]); // Empty dependency array means this effect runs once on mount

  // calculate the current supply of POXME
  const {data: poxmeSupply} = useContractRead({
    address: addresses(chain?.id)['PoxmeToken'],
    abi: poxmeToken.abi,
    functionName: 'totalSupply',
    args: [],
  })


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
    args: [addresses(chain?.id)['PoXMigration'], BigInt(2 * 10 ** 53 - 1)],
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
      lastDeposit: BigNumber;
    } | undefined;
  } = useContractRead({
    address: addresses(chain?.id)['PoXMigration'],
    abi: migrationAbi.abi,
    functionName: 'getUserInfo',
    onSuccess: () => {
      console.log('balanceOf refeched');
    },
    args: [address],
    cacheTime: 5,
    staleTime: 0,
    scopeKey: 'balanceOf',
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

  const calculateAmounts = useCallback(() => {
    const allowance = Number(uint256ToBNBCurrency(oldTokenAllowance as unknown as string))
    const available = Number(eulerBalance?.formatted)
    const deposited = uint256ToBNBCurrency(userInfo?.deposited as unknown as string)
    const claimed = uint256ToBNBCurrency(userInfo?.minted as unknown as string)
    const pending = Number(deposited) - Number(claimed)
    const lastDeposited = Number(userInfo?.lastDeposit?.toString())
    const canDeposit = allowance > available
    const blocksPending = Number(blockNumber) - lastDeposited > 100 ? 0 : 100 - (Number(blockNumber) - lastDeposited)
    return {allowance, canDeposit, deposited, blocksPending, claimed, pending, available}
  }, [blockNumber, eulerBalance, userInfo])

  const addAsset = () => {
    try {
      if (address && window) {
        // @ts-ignore
        const client = createWalletClient({chain: mainnet, transport: custom(window.ethereum),})
        return (
          <div className="space-x-3 mb-6">
            {address && (
              <Button
                className="bg-gradient-to-r from-purple-900 via-white-500 to-purple-500 hover:from-purple-400 hover:via-white-500 hover:to-purple-500"
                onClick={() => {
                  watchAsset(client, {
                    type: 'ERC20',
                    options: {
                      address: addresses(chain?.id)['PoxmeToken'],
                      decimals: 18,
                      symbol: 'POXME',
                    },
                  })
                }}>
                Add Token to Wallet
              </Button>
            )}
          </div>)
      } else {
        return null
      }
    } catch (e) {
      return null
    }
  }

  return (
    <div>
      <Countdown/>
      <Card className="mb-4 my-3">
        <CardHeader>
          <h3 className="text-lg font-semibold">Deposit <span style={{color: 'blue'}}>$EULER</span></h3>
        </CardHeader>
        <CardContent>
          <div className="space-x-3 mb-6">
            <p className="text-gray-500 pb-6">Deposit <span style={{color: 'blue'}}>$EULER</span> to claim
              the new token</p>
            <p className="text-gray-500">You have <strong
              style={{color: 'black'}}>{calculateAmounts().available}</strong> <span
              style={{color: 'blue'}}>$EULER</span> to
              migrate</p>

          </div>
          <div className="space-x-3 mb-6">
            {!calculateAmounts().canDeposit && <>
              <p className="text-gray-500">The migration center Allowance
                is {calculateAmounts().allowance}</p>
              <Button
                className="mt-4 inline-flex items-center rounded-md border border-transparent bg-gray-900 px-2.5 py-0.5 text-xs font-semibold text-gray-50 shadow transition-colors hover:bg-gray-900/80 focus:outline-none focus:ring-2 focus:ring-gray-950 focus:ring-offset-2 dark:border-gray-800 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/80 dark:focus:ring-gray-300"
                onClick={() => approveOldToken?.()}
              >
                Approve Contract
              </Button>
            </>}
          </div>
          {calculateAmounts().canDeposit && <Button
            className="mt-4inline-flex items-center rounded-md border border-transparent bg-gray-900 ml-2 px-2.5 py-0.5 text-xs font-semibold text-gray-50 shadow transition-colors hover:bg-gray-900/80 focus:outline-none focus:ring-2 focus:ring-gray-950 focus:ring-offset-2 dark:border-gray-800 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/80 dark:focus:ring-gray-300"
            onClick={(e) => {
              const visibleValue = BigInt(Math.trunc(calculateAmounts().available))
              const value = BigInt(Number(visibleValue) * 10 ** 18)
              setVisibleAmount(visibleValue)
              setDepositAmount(value);
            }}>Max Tokens</Button>}
          <div className="space-x-3 mb-6">
            {calculateAmounts().canDeposit && <div className="flex justify-between pt-3">
              <Input
                placeholder="Amount"
                type="number"
                value={visibleAmount.toString()}
                onChange={(e) => {
                  const value = BigInt((Number(e.target.value)) * 10 ** 18)
                  const visibleValue = BigInt(Number(e.target.value))
                  setVisibleAmount(visibleValue)
                  setDepositAmount(value);
                }}/>
              <Button disabled={depositAmount === BigInt(0) || !isMigrationActive}
                      className="pt-3 mt-4inline-flex items-center rounded-md border border-transparent bg-gray-900 ml-2 px-2.5 py-0.5 text-xs font-semibold text-gray-50 shadow transition-colors hover:bg-gray-900/80 focus:outline-none focus:ring-2 focus:ring-gray-950 focus:ring-offset-2 dark:border-gray-800 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/80 dark:focus:ring-gray-300"
                      onClick={() => depositTokens?.()}>Deposit</Button>
            </div>}
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <h3 className="text-lg font-semibold">Claim new <strong style={{color: 'purple'}}>$POXME</strong> Tokens
          </h3>
          <h4 className="font-bold text-gray-900 bg-indigo-300 px-6 rounded">Total tokens
            migrated: {getBigNumberCurrencyLabel(poxmeSupply as unknown as string, true, 2, true)}
          </h4>
        </CardHeader>
        <CardContent>
          {addAsset()}
          <div className="space-x-3 mb-6">
            <p className="text-gray-500">
              You have deposited:
              <span
                className="font-bold text-gray-900"> {calculateAmounts().deposited} tokens
        </span>
            </p>
            <p className="text-gray-500 mt-2">
              You have claimed:
              <span
                className="font-bold text-gray-900"> {calculateAmounts().claimed} tokens </span>
            </p>
            <p className="text-gray-500 mt-2">
              You can claim:
              <span
                className="font-bold text-gray-900"> {calculateAmounts().pending} tokens </span>
            </p>
          </div>
          <div className="space-x-3 mb-6">
            {calculateAmounts().blocksPending > 0 &&
              <p className="bg-red-500 border border-red-400 text-white mt-2">
                Please wait:
                <span
                  className="font-bold text-white"> {calculateAmounts().blocksPending} blocks</span> to claim.
              </p>
            }
            <div className="flex justify-center pt-3">
              <Button
                disabled={calculateAmounts().pending === 0 || calculateAmounts().blocksPending > 0 || !isMigrationActive}
                className="mt-4inline-flex items-center rounded-md border border-transparent bg-gray-900 ml-2 px-2.5 py-0.5 text-xs font-semibold text-gray-50 shadow transition-colors hover:bg-gray-900/80 focus:outline-none focus:ring-2 focus:ring-gray-950 focus:ring-offset-2 dark:border-gray-800 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/80 dark:focus:ring-gray-300"
                onClick={() => claimTokens?.()}>Claim Tokens</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
