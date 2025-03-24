import { ethers } from "ethers";
import { useActiveAccount } from "thirdweb/react";
import {
  getContract,
  prepareContractCall,
  sendTransaction,
  waitForReceipt,
} from "thirdweb";
import { client } from "../utils/client";
import { chain } from "./useThirdWeb";

export const useLiquidityPool = () => {
  const account = useActiveAccount();
  const address = account?.address;

  const contract = getContract({
    client,
    chain,
    address: "0x1f2baea79d2f57687B0375FA1BeD1eca27f4b18b",
  });

  const addLiquidity = async (amount: number) => {
    if (!contract || !address) return;

    const tokenA = "0xFEca406dA9727A25E71e732F9961F680059eF1F9";
    const tokenB = "0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619";
    const amountA = ethers.parseUnits(amount.toString(), 18);
    const amountB = ethers.parseUnits(amount.toString(), 18);
    console.log(amountA, amountB);
    const transaction = prepareContractCall({
      contract,
      method:
        "function addLiquidity(address tokenA, address tokenB, uint amountADesired, uint amountBDesired, uint amountAMin, uint amountBMin, address to, uint deadline)",
      params: [
        tokenA,
        tokenB,
        amountA,
        amountB,
        BigInt(0),
        BigInt(0),
        address,
        BigInt(Math.floor(Date.now() / 1000) + 60 * 10),
      ],
    });
    const transactionResult = await sendTransaction({
      transaction,
      account,
    });

    const receipt = await waitForReceipt(transactionResult);

    console.log(receipt);
    alert("Liquidez adicionada com sucesso!");
  };

  return { addLiquidity, address };
};
