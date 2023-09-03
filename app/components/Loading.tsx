import React, { FC } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

interface LoadingProps {}

const Loading: FC<LoadingProps> = ({}) => {
  return (
    <div className='flex min-h-screen flex-col bg-[#171819] md:flex-row'>
      <div className='md:w-[20%]'>
        <Skeleton className='h-full' />
      </div>
      <div className='flex h-screen w-screen flex-col overflow-x-hidden'>
        <div className='mx-5 flex items-center justify-between p-10 py-8'>
          <Skeleton height={30} width={200} />
          <div className='flex items-center bg-[#171819]'>
            <Skeleton height={30} width={150} />
          </div>
        </div>
        <div className='mx-auto mb-5 grid h-[15vh] w-[76vw] grid-cols-3 space-x-1 divide-x divide-[#3F4042] rounded bg-[#202123] p-5 text-[15px] text-gray-400'>
          <Skeleton height={30} width={100} />
          <Skeleton height={30} width={150} />
          <Skeleton height={30} width={150} />
        </div>
        <div className='grid-col-1 mx-auto grid grid-flow-col'>
          <div>
            <Skeleton height={200} width={300} />
          </div>
          <div className='relative left-[2vh]'>
            <Skeleton height={200} width={500} />
          </div>
        </div>
        <div className='mx-5 flex items-center p-10 py-5'>
          <Skeleton height={30} width={200} />
        </div>
        <div className='m-auto mb-10 grid w-[75vw] grid-cols-3 gap-10'>
          <div>
            <Skeleton height={200} width={300} />
          </div>
          <div className='w-[25vw] '>
            <Skeleton height={300} />
          </div>
          <div className='w-[25vw] '>
            <Skeleton height={300} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
