'use client';
import React, { useEffect, useState } from 'react';

import {
  SideBar,
  MiniCards,
  SearchBar,
  Cards,
  Loading,
} from '@/app/components';

function Page() {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className='flex min-h-screen flex-col bg-[#171819] md:flex-row'>
          <div className='md:w-[20%]'>
            <SideBar typeOfAccount='investor' />
          </div>
          <div className='flex h-screen w-screen flex-col'>
            <div className='mx-5 flex items-center justify-between p-10 py-8'>
              <span className='text-[25px] font-semibold text-white'>
                Dashboard
              </span>
              <div className='flex items-center bg-[#171819]'>
                <SearchBar placeholderDetails='Search here' width='20vw' />
              </div>
            </div>
            <div className='flex flex-row md:flex-col'>
              {/* Upper */}
              <div className='mx-5 grid grid-cols-1 gap-4 p-10 md:grid-cols-[repeat(auto-fill,minmax(200px,1fr))]'>
                {/* MiniCards components */}
                <div>
                  <MiniCards />
                </div>
              </div>
              {/* Lower grid */}
              <div className='mx-5 flex-1 p-10 md:flex md:flex-col '>
                <div className='mb-4 text-center text-[40px] font-semibold text-[#F4EEEE]'>
                  Projects
                </div>
                <hr className='border-white py-4' />
                <div className='grid grid-cols-1 gap-4 md:grid-cols-[repeat(auto-fill,minmax(200px,1fr))]'>
                  <div>
                    <Cards
                      name='nature ngo'
                      desc='We are planting tress to reduce the amount of carbon captured.'
                    />
                  </div>
                  <div>
                    <Cards
                      name='land ngo'
                      desc='We are a movement who help to reduce the emissions of carbon with the help of our environment friendly method .'
                    />
                  </div>
                  <div>
                    <Cards
                      name='water ngo'
                      desc='We are a movement who help to reduce the water pollution.'
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Page;
