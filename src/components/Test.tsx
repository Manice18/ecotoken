"use client";
import { FC, useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import { useRefi } from "@/hooks/useRefi";
import { useWallet } from "@solana/wallet-adapter-react";
import { PublicKey } from "@solana/web3.js";
import { useRouter } from "next/navigation";

interface TestProps {}

const Test: FC<TestProps> = ({}) => {
  const typeOfAccount = "NGO";
  const data = {
    name_of_ngo: "what",
    date_of_ngo_started: "what",
  };
  const { connected, publicKey } = useWallet();
  const {
    sendSol,
    initialized,
    initializeUser,
    test,
    addNgoAccount,
    addNgoTest,
    updateNgoDashboard,
    findTo,
  } = useRefi({
    typeOfAccount,
  });
  const { push } = useRouter();
  const [loading, setLoading] = useState(false);

  return (
    <div>
      <Navbar
        connected={connected}
        publicKey={publicKey as PublicKey}
        initialized={initialized}
        initializeUser={initializeUser}
      />
      <p
        onClick={() => {
          updateNgoDashboard();
        }}
      >
        Please Wait
      </p>
      <p
        onClick={() => {
          push("dashboard");
        }}
      >
        push
      </p>
      <p
        onClick={() => {
          test({ hi: "hi" });
        }}
      >
        test me
      </p>
      <p onClick={() => findTo()}>HI</p>
    </div>
  );
};

export default Test;
