const apiURL = "https://api.pixonchain.com/api/banking";

interface QrCode {
  id: string;
  uuid: string;
  purchaseFlowId: string;
  due: string;
  qrCode: string;
  receiverAddress: string;
  feeAmount: number;
  feePercentage: number;
  tradePrice: number;
  totalAmountPreview: number;
  currencyOutput: string;
  network: string;
}

export async function GET(req: Request) {
  const url = new URL(req.url);
  const value = url.searchParams.get("value");
  const simulation = url.searchParams.get("simulation") === "true";
  const receiverAddress = url.searchParams.get("receiverAddress");

  if (!value || simulation === undefined || !receiverAddress) {
    return new Response(JSON.stringify({ error: "Preencha todos os campos" }), {
      status: 400,
    });
  }

  const apiKey = process.env.NEXT_PUBLIC_PIXONCHAIN_API_KEY;
  const secretKey = process.env.NEXT_PUBLIC_PIXONCHAIN_API_SECRET;

  if (!apiKey || !secretKey) {
    return new Response(
      JSON.stringify({
        error: "API_KEY ou SECRET_KEY não foram definidas no .env",
      }),
      { status: 500 }
    );
  }

  try {
    const body = {
      value,
      simulation,
      receiverAddress,
    };

    const response = await fetch(`${apiURL}/quote-transaction`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey,
        "x-secret-key": secretKey,
      },
      body: JSON.stringify(body),
    });

    const data = (await response.json()) as QrCode;

    return new Response(JSON.stringify(data), { status: 200 });
  } catch (error) {
    return new Response(
      JSON.stringify({
        error: `Erro ao gerar QR Code: ${(error as Error).message}`,
      }),
      { status: 500 }
    );
  }
}
