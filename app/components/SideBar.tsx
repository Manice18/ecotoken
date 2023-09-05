'use client';
import React from 'react';
import { Profile, NavItems } from '@/app/components';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { useWallet } from '@solana/wallet-adapter-react';
import { PublicKey } from '@solana/web3.js';
import { useRouter } from 'next/navigation';
import { investorDashboard, ngoDashboard } from '@/app/utils';

function SideBar({ typeOfAccount }: { typeOfAccount: string }) {
  const { push } = useRouter();
  const { connected, publicKey } = useWallet();
  return (
    <div className=' fixed flex h-full flex-col bg-[#202123] text-white '>
      <div
        className='cursor-pointer px-[85px] py-[50px] text-xl font-semibold text-[#54b946]'
        onClick={() => push('/')}
      >
        EcoToken
      </div>

      <Profile />
      <NavItems
        data={typeOfAccount === 'ngo' ? ngoDashboard : investorDashboard}
        connected={connected}
        publicKey={publicKey as PublicKey}
      />
    </div>
  );
}

export default SideBar;
