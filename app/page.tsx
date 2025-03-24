"use client";

import { useState } from "react";
import Template from "@/components/Template";
import AccountBalance from "@/components/AccountBalance";
import { useLiquidityPool } from "@/hooks/useLiquidityPool";
import MyInvestments from "@/components/MyInvestments";
import LiquidityPool from "@/components/LiquidityPool";

export default function Home() {
  const { addLiquidity, address } = useLiquidityPool();
  const [amount, setAmount] = useState("");

  const handleAddLiquidity = () => {
    const parsedAmount = parseFloat(amount);
    if (!isNaN(parsedAmount) && parsedAmount > 0) {
      addLiquidity(parsedAmount);
    } else {
      alert("Por favor, insira um valor válido.");
    }
  };

  return (
    <Template>
      <AccountBalance />
      <MyInvestments />
      <LiquidityPool />
    </Template>
  );
}
