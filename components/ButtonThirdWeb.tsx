import { client } from "@/utils/client";
import { polygonAmoy } from "thirdweb/chains";
import { ConnectButton } from "thirdweb/react";

const ButtonThirdWeb = () => {
  return (
    <>
      <ConnectButton
        supportedTokens={{
          [polygonAmoy.id.toString()]: [
            {
              address: "0xFEca406dA9727A25E71e732F9961F680059eF1F9",
              name: "$AL",
              symbol: "$AL",
            },
          ],
        }}
        detailsButton={{
          displayBalanceToken: {
            [polygonAmoy.id]: "0xFEca406dA9727A25E71e732F9961F680059eF1F9",
          },
        }}
        locale={"pt_BR"}
        client={client}
      />
    </>
  );
};

export default ButtonThirdWeb;
