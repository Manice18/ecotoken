"use client";
import { FC } from "react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { truncate } from "@/utils/string";
import { PublicKey } from "@solana/web3.js";
import { useRouter } from "next/navigation";
require("@solana/wallet-adapter-react-ui/styles.css");

interface NavbarProps {
  connected: boolean;
  publicKey: PublicKey;
  initializeUser: Function;
  initialized: boolean;
}

const Navbar: FC<NavbarProps> = ({
  connected,
  publicKey,
  initializeUser,
  initialized,
}) => {
  const { push } = useRouter();
  return (
    <header className="sticky top-0 z-50 items-center border-b bg-white px-10 py-4 font-Poppins transition-all md:grid md:grid-cols-3 xl:px-10">
      <div
        className="cursor-pointer text-3xl font-semibold text-[#54b946]"
        onClick={() => push("/")}
      >
        EcoToken
      </div>

      <div className="flex flex-1 px-6 transition-all duration-300 xl:justify-center">
        <p className="cursor-pointer rounded-full bg-transparent px-4 py-2 text-base font-medium text-gray-600 hover:bg-gray-100">
          Our approach
        </p>
        <p className="cursor-pointer rounded-full bg-transparent px-4 py-2 text-base font-medium text-gray-600 hover:bg-gray-100">
          Impact
        </p>
        <p className="cursor-pointer rounded-full bg-transparent px-4 py-2 text-base font-medium text-gray-600 hover:bg-gray-100">
          Solution
        </p>
        <p
          className="cursor-pointer rounded-full bg-transparent px-4 py-2 text-base font-medium text-gray-600 hover:bg-gray-100"
          onClick={() => push("globalMarketplace")}
        >
          Market Place
        </p>
      </div>

      <div className="flex items-center justify-end">
        {initialized ? (
          <></>
        ) : (
          <button
            className="mr-2 cursor-pointer rounded-full border border-transparent px-3 py-2 text-base font-medium text-gray-600 hover:bg-gray-100"
            onClick={() => initializeUser()}
          >
            Initialize
          </button>
        )}

        <WalletMultiButton>
          <span className="text-base font-semibold text-slate-200">
            {connected ? truncate(publicKey.toString()) : "Connect Wallet"}
          </span>
        </WalletMultiButton>
      </div>
    </header>
  );
};

export default Navbar;
