"use client"
import { ConnectWalletButton } from "./ConnectWalletButton";
import { MetaMaskProvider } from "@metamask/sdk-react";

export default function Header() {

    const host =
    typeof window !== "undefined" ? window.location.host : "defaultHost";

  const sdkOptions = {
    logging: { developerMode: false },
    checkInstallationImmediately: false,
    dappMetadata: {
      name: "Next-Metamask-Boilerplate",
      url: host, // using the host constant defined above
    },
  };

  return (
    <div className="navbar bg-base-100">
      <a className="btn btn-ghost text-xl">Mandala</a>
      <MetaMaskProvider debug={false} sdkOptions={sdkOptions}>
          <ConnectWalletButton />
        </MetaMaskProvider>
    </div>
  );
}
