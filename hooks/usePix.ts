"use client";
import { useState } from "react";
import { useThirdWeb } from "./useThirdWeb";
import QRCode from "qrcode";

interface UsePixReturn {
  showQRCode: boolean;
  qrCodeData: string | null;
  error: string | null;
  isPixLoading: boolean;
  handleGenerateQRCode: any;
}

const usePix = (): UsePixReturn => {
  const [showQRCode, setShowQRCode] = useState(false);
  const [qrCodeData, setQrCodeData] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isPixLoading, setIsPixLoading] = useState(false);
  const { address } = useThirdWeb();

  const handleGenerateQRCode = async (amount: any) => {
    if (amount) {
      setIsPixLoading(true);
      try {
        const body = {
          value: amount,
          simulation: true,
          receiverAddress: address,
        };

        const response = await fetch(
          `/api/pix?wallet=${address}&value=${amount}&receiverAddress=${address}`
        );

        const data = await response.json();

        const url = await QRCode.toDataURL(data.qrCode);

        setQrCodeData(url);
        setShowQRCode(true);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setIsPixLoading(false);
      }
    }
  };

  return {
    showQRCode,
    qrCodeData,
    error,
    isPixLoading,
    handleGenerateQRCode,
  };
};

export default usePix;
