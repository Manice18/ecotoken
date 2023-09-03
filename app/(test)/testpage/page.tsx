"use client";
import { useWallet } from "@solana/wallet-adapter-react";
import { useRefi } from "@/app/hooks/useRefi";
import { FC, useEffect, useState } from "react";
import { Loading } from "@/app/components";

interface pageProps {}

const Page: FC<pageProps> = ({}) => {
  const { connected, publicKey } = useWallet();
  const typeOfAccount = "NGO";

  const { initialized, initializeUser, addNgoAccount, test } = useRefi({
    typeOfAccount,
  });
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 3000);
  }, []);

  return (
    <div>
      {/* <Navbar
        connected={connected}
        publicKey={publicKey as PublicKey}
        initialized={initialized}
        initializeUser={initializeUser}
      />
      <p onClick={() => test({ hi: "etr" })}>test here</p> */}
      {/* {loading ? <Test /> : <Loading />} */}
      <Loading />
    </div>
  );
};

export default Page;
