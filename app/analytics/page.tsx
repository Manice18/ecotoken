import React from 'react';
import {
  SideBar,
  SearchBar,
  CategoryBarChartPairGroup,
} from '@/app/components';

function Page() {
  const data = new Array(2).fill(null);

  return (
    <>
      <div className='flex h-screen flex-col bg-[#171819] md:flex-row'>
        <div className='md:w-[20%]'>
          <SideBar typeOfAccount='ngo' />
        </div>
        <div className='flex h-screen w-screen flex-col'>
          <div className='mx-5 flex items-center justify-between p-10 py-8'>
            <span className='text-4xl font-semibold tracking-[0.09em] text-white'>
              Analytics
            </span>
            <div className='flex items-center bg-[#171819]'>
              <SearchBar placeholderDetails='Search ...' width='20%' />
            </div>
          </div>
          <CategoryBarChartPairGroup data={data} />
        </div>
      </div>
    </>
  );
}

export default Page;
