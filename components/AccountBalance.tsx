import React from "react";
import { useAccountBalance } from "../hooks/useAccountBalance";

const AccountBalance = () => {
  const { balance, isLoading } = useAccountBalance();

  if (isLoading) {
    return <div>Carregando...</div>;
  }

  return (
    <div className="flex justify-center items-center mt-8">
      <div className="p-2 bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100 flex fle-col">
        <div className="flex flex-row w-full justify-between px-8 mx-8">
          <p>Saldo</p>
          <p>
            {balance
              ? `${balance.displayValue} SOL`
              : "Não foi possível carregar o saldo"}
          </p>
        </div>
        <div className="flex flex-col items-center justify-center w-full max-w-7xl xl:px-0 lg:px-10 px-6 gap-8 text-black bg-white bg-opacity-30 backdrop-filter backdrop-blur-md rounded-lg">
          <p>Depositar</p>
        </div>
      </div>
    </div>
  );
};

export default AccountBalance;
