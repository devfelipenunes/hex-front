import { client } from "@/utils/client";
import { polygon, polygonAmoy } from "thirdweb/chains";
import { ConnectButton } from "thirdweb/react";

// TODO: implementar a lógica de exibição do botão de conexão
const isDevEnv = process.env.NODE_ENV === "development";
export const chain = isDevEnv ? polygonAmoy : polygon;

const ButtonThirdWeb = () => {
  return (
    <>
      <ConnectButton
        chain={polygonAmoy}
        locale={"pt_BR"}
        client={client}
      />
    </>
  );
};

export default ButtonThirdWeb;
