'use client';
import { Navbar } from '@/app/components';
import { useRefi } from '@/app/hooks/useRefi';
import { useWallet } from '@solana/wallet-adapter-react';
import { PublicKey } from '@solana/web3.js';
import { FC } from 'react';

interface pageProps {}

const Page: FC<pageProps> = ({}) => {
  const typeOfAccount = 'NGO';
  const { connected, publicKey } = useWallet();
  const { sendSol, initialized, initializeUser } = useRefi({
    typeOfAccount,
  });
  return (
    <div>
      <Navbar
        connected={connected}
        publicKey={publicKey as PublicKey}
        initialized={initialized}
        initializeUser={initializeUser}
      />
      <p
        onClick={() =>
          sendSol({
            to: '91znXXrPcYGwQMS3EpBfsGQtXWYMHkrNRBNyrGtsLFTf',
            amount: 1,
          })
        }
      >
        hi
      </p>
    </div>
  );
};

export default Page;
