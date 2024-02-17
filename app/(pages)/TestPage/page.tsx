import UserAccount from "@/app/_components/web3Components/UserAccount";
import SignMessage from "@/app/_components/web3Components/SignMessage";
import React from "react";

export default function Page() {
  return (
    <>
      <div>
        <div>TestPage</div>
        <UserAccount />
        <SignMessage />
      </div>
    </>
  );
}
