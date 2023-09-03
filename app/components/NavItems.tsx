'use client';
import Link from 'next/link';
import { PublicKey } from '@solana/web3.js';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { truncate } from '@/app/utils/';
import React from 'react';
require('@solana/wallet-adapter-react-ui/styles.css');

interface NavItem {
  href: string;
  icon:
    | React.FC<any>
    | string
    | React.FunctionComponent<{}>
    | React.ComponentClass<{}, any>;
  label: string;
}

interface NavbarProps {
  connected: boolean;
  publicKey: PublicKey;
  data: NavItem[];
}

function NavItems({ connected, publicKey, data }: NavbarProps) {
  return (
    <div className='mx-10 mt-4 flex flex-col space-y-3 py-8 text-[19px]'>
      {data?.map((item, index) => (
        <Link
          key={index}
          className='flex items-center gap-3 p-2 hover:w-[10rem] hover:rounded hover:bg-[#5CC94D] hover:text-black'
          href={item.href}
        >
          {React.createElement(item.icon)}
          {item.label}
        </Link>
      ))}
      <WalletMultiButton>
        <span className='text-base font-semibold text-slate-200'>
          {connected ? truncate(publicKey.toString()) : 'Connect Wallet'}
        </span>
      </WalletMultiButton>
    </div>
  );
}

export default NavItems;
