import UserAccount from "@/app/components/web3Components/UserAccount";
import SignMessage from "@/app/components/web3Components/SignMessage";
import React from "react";

export default function TestPage() {
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
