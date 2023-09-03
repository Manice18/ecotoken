import React from 'react';
import Image from 'next/image';
import { elements } from '@/app/utils';
import clsx from 'clsx';

function Category() {
  return (
    <>
      <div className='relative h-[40vh] w-[28vw] overflow-hidden rounded-[0.5rem] bg-[#202123] px-5 py-4 text-white shadow-lg'>
        <span className='mb-2 text-3xl font-bold '>Category</span>
        <div className='grid grid-cols-4 py-5'>
          {elements.map((value, index) => (
            <div key={index}>
              <Image
                src={`/${value.name}.jpeg`}
                height={90}
                width={90}
                alt='forest'
              />
              <p
                className={clsx(
                  'relative text-center',
                  index === 0 || (index === 1 && 'bottom-1/2')
                )}
              >
                {value.name.toUpperCase()}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Category;
