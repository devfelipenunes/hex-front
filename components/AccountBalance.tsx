import React from "react";
import { useThirdWeb } from "../hooks/useThirdWeb";

const AccountBalance = () => {
  const { balance, isBalanceLoading } = useThirdWeb();

  if (isBalanceLoading) {
    return <div>Carregando...</div>;
  }

  return (
    <div className="w-full max-w-7xl mx-auto md:px-0 lg:px-10 px-6">
      <div className="flex flex-col justify-center items-center mt-8 gap-8 bg-black py-5 px-10 rounded-2xl">
        <div className="flex flex-row w-full justify-between">
          <p>Saldo</p>
          <p>
            {balance
              ? `${balance.displayValue} SOL`
              : "Não foi possível carregar o saldo"}
          </p>
        </div>
        <div
          className="w-full h-[31px] flex justify-center items-center bg-[#C6FDB8] rounded-4xl cursor-pointer"
          onClick={() => (window.location.href = "/pix")}
        >
          <p className="text-black">Depositar</p>
        </div>
      </div>
    </div>
  );
};

export default AccountBalance;
