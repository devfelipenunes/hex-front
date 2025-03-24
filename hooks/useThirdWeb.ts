import { useActiveAccount, useWalletBalance } from "thirdweb/react";
import { client } from "../utils/client";
import { polygonAmoy } from "thirdweb/chains";

export const chain = polygonAmoy;

export const useThirdWeb = () => {
  const account = useActiveAccount();
  const address = account?.address;
  const { data: balance, isLoading: isBalanceLoading } = useWalletBalance({
    client,
    chain,
    address: address,
  });

  return { balance, address, isBalanceLoading };
};
