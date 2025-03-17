import { useActiveAccount, useWalletBalance } from "thirdweb/react";
import { client } from "../utils/client";
import { polygon, polygonAmoy } from "thirdweb/chains";

const isTestEnv = true;
export const chain = isTestEnv ? polygonAmoy : polygon;

export const useAccountBalance = () => {
  const account = useActiveAccount();
  const { data: balance, isLoading } = useWalletBalance({
    client,
    chain,
    address: account?.address,
  });

  console.log("balance", balance);

  return { balance, isLoading };
};
