import React from 'react';
import Image from 'next/image';

function GlobalCards() {
  return (
    <>
      <div className='flex flex-row rounded-xl bg-[#202023]'>
        <div className=''>
          <Image
            src='/forest.jpeg'
            width={250}
            height={220}
            alt=''
            className='h-[100%] w-40 rounded'
          />
        </div>
        <div className='m-4 space-y-2'>
          <p className='text-3xl'>Project Name</p>
          <p className='text-lg'>Description:</p>
        </div>
        <div className='relative left-[25%] top-[80%]'>
          <button className='h-10 w-[5em] rounded-sm bg-[#5CC94D] hover:text-black'>
            Buy
          </button>
        </div>
      </div>
    </>
  );
}

export default GlobalCards;
