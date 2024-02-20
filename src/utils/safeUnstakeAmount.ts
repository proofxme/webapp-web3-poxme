import { uint256ToNumber } from "./bigNumber";

const safeUnstakeAmount = (userInfo: any) => {
  // Ensuring userInfo and userInfo?.amount are defined
  if (userInfo !== undefined && userInfo?.amount !== undefined) {
    // Assuming uint256ToBNBCurrency properly converts to a number or a format that can be used as a number
    const rawBalance = uint256ToNumber(userInfo?.amount as unknown as number);
    const balance = Number(rawBalance); // Convert to a number

    // Check if balance is greater than 4000 to ensure a minimum threshold for unstaking
    if (balance > 4000) {
      const toUnstake = Math.floor(balance - 1) * 10 ** 18;
      return BigInt(toUnstake); // Return the amount to unstake as a safe integer
    } else {
      return undefined; // or handle this case as per your application's needs
    }
  } else {
    return undefined;
  }
};

export { safeUnstakeAmount };
