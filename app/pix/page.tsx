"use client";

import Template from "@/components/Template";
import usePix from "@/hooks/usePix";
import { useState } from "react";

const Pix = () => {
  const [amount, setAmount] = useState("");
  const { handleGenerateQRCode, showQRCode, qrCodeData, error } = usePix();

  return (
    <Template>
      <div className="flex flex-col items-center mt-12">
        <h1 className="text-black text-2xl font-bold mb-6">Simular PIX</h1>
        {!showQRCode ? (
          <div className="flex flex-col items-center">
            <input
              type="number"
              placeholder="Digite o valor do PIX"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="p-2 text-lg mb-5 rounded border border-gray-300 w-52"
            />
            <button
              onClick={() => handleGenerateQRCode(amount)}
              className="px-5 py-2 text-lg bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Gerar QR Code
            </button>
            {error && <p className="text-red-500 mt-4">{error}</p>}
          </div>
        ) : (
          <div className="text-center">
            <h2 className="text-xl font-semibold mb-4">QR Code Gerado</h2>
            <div className="w-52 h-52 bg-gray-200 flex items-center justify-center border border-gray-300">
              {qrCodeData ? (
                <img
                  src={qrCodeData}
                  alt="QR Code"
                />
              ) : (
                <span>QR Code Placeholder</span>
              )}
            </div>
          </div>
        )}
      </div>
    </Template>
  );
};

export default Pix;
