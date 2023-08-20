"use client";
import React from "react";
import Profile from "@/components/Profile";
import NavItems from "@/components/NavItems";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { useWallet } from "@solana/wallet-adapter-react";
import { PublicKey } from "@solana/web3.js";
import { useRouter } from "next/navigation";

function SideBar({ data }: any) {
  const { push } = useRouter();
  const { connected, publicKey } = useWallet();
  return (
    <div className=" fixed flex  h-full flex-col bg-[#202123] ">
      <div
        className="cursor-pointer px-[85px] py-[50px] text-xl font-semibold text-[#54b946]"
        onClick={() => push("/")}
      >
        EcoToken
      </div>

      <div className="">
        <Profile />
        <NavItems
          data={data}
          connected={connected}
          publicKey={publicKey as PublicKey}
        />
      </div>
    </div>
  );
}

export default SideBar;
