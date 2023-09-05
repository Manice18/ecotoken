import React from 'react';
import { GlobalCards, SearchBar, SideBar } from '@/app/components';

function Page() {
  return (
    <>
      <div className=' flex min-h-screen flex-col overflow-x-hidden  bg-[#171819] md:flex-row'>
        <div className='md:w-[20%]'>
          <SideBar typeOfAccount='investors' />
        </div>
        <div className=' flex h-screen w-screen flex-col'>
          <div className='mx-5 flex items-center justify-between p-10 py-8'>
            <span className='text-[25px] font-semibold text-white '>
              Marketplace
            </span>
            <div className='flex items-center bg-[#171819]'>
              <SearchBar
                placeholderDetails='Search for projects'
                width='10vw'
              />
            </div>
          </div>
          <div className='m-10 grid grid-cols-2 justify-center gap-5 pl-5 text-white'>
            {[1, 2, 3].map((value) => (
              <GlobalCards key={value} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
export default Page;
