"use client";

import { useState } from "react";
import Template from "@/components/Template";
import AccountBalance from "@/components/AccountBalance";
import { useLiquidityPool } from "@/hooks/useLiquidityPool";

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
      <div className="flex flex-col items-center justify-center mt-8">
        {address ? (
          <>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Quantidade de USDC"
              className="px-4 py-2 border rounded mb-4"
            />
            <button
              onClick={handleAddLiquidity}
              className="px-4 py-2 bg-blue-500 text-white rounded"
            >
              Adicionar Liquidez
            </button>
          </>
        ) : (
          <p>Conecte sua carteira</p>
        )}
      </div>
    </Template>
  );
}
