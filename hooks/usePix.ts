"use client";
import { useState } from "react";
import { useThirdWeb } from "./useThirdWeb";

interface UsePixReturn {
  showQRCode: boolean;
  qrCodeData: string | null;
  error: string | null;
  handleGenerateQRCode: any;
}

const usePix = (): UsePixReturn => {
  const [showQRCode, setShowQRCode] = useState(false);
  const [qrCodeData, setQrCodeData] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const { address } = useThirdWeb();

  const handleGenerateQRCode = async (amount: any) => {
    if (amount) {
      try {
        const body = {
          value: amount,
          simulation: true,
          receiverAddress: address,
        };
        console.log("body", body);

        const response = await fetch(
          `/api/pix?wallet=${address}&value=${amount}&receiverAddress=${address}`
        );

        const data = await response.json();
        console.log("data", data);
        setQrCodeData(data.qrCode);
        setShowQRCode(true);
      } catch (err) {
        setError((err as Error).message);
      }
    }
  };

  return {
    showQRCode,
    qrCodeData,
    error,
    handleGenerateQRCode,
  };
};

export default usePix;
