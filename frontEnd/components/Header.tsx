import { ConnectButton } from "@rainbow-me/rainbowkit";
import React from "react";

type Props = {};

const Header = (props: Props) => {
  return (
    <nav className="flex flex-row justify-between py-10 px-10 ">
      <h1 className="flex text-2xl font-bold">MsgDapp</h1>

      <ConnectButton showBalance={true} />
    </nav>
  );
};

export default Header;
