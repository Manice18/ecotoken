'use client';
import {
  SideBar,
  Cards,
  AddButton,
  SearchBar,
  BarChart,
  Category,
  MyFormModal,
  Loading,
} from '@/app/components';
import { useEffect, useState } from 'react';
import { useRefi } from '@/app/hooks/useRefi';

function Page() {
  const [isPopUpOpen, setIsPopUpOpen] = useState<boolean>(false);
  const [cards, setCards] = useState<any>([{}]);
  const { findNgoProjects } = useRefi({ typeOfAccount: 'NGO' });

  useEffect(() => {
    const handleClick = async () => {
      const x = await findNgoProjects();
      setCards(x);
    };
    handleClick();
    //eslint-disable-next-line
  }, []);
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
        <div className=' flex min-h-screen flex-col bg-[#171819]  md:flex-row'>
          <div className='md:w-[20%]'>
            <SideBar typeOfAccount='ngo' />
          </div>
          <div className=' flex h-screen w-screen flex-col overflow-x-hidden'>
            <div className='mx-5 flex items-center justify-between p-10 py-8 '>
              <span className='text-[25px] font-semibold text-white '>
                Dashboard
              </span>
              <div className='flex items-center bg-[#171819]'>
                <SearchBar
                  placeholderDetails='Search listed project'
                  width='30vw'
                />
              </div>
            </div>

            <div className='mx-auto mb-5 grid h-[15vh] w-[76vw] grid-cols-3 space-x-1 divide-x divide-[#3F4042] rounded bg-[#202123] p-5 text-[15px] text-gray-400'>
              <div className=' flex flex-row items-center justify-center '>
                Amount{' '}
              </div>
              <div className='flex flex-row items-center justify-center '>
                Contributors{' '}
              </div>
              <div className='flex flex-row items-center justify-center '>
                Carbon Captured{' '}
              </div>
            </div>
            <div className='grid-col-1 mx-auto grid grid-flow-col '>
              <div>
                <Category />
              </div>
              <div className='relative left-[2vh]'>
                <BarChart />
              </div>
            </div>
            <div className='mx-5 flex items-center p-10 py-5'>
              <span className='text-[25px] font-semibold text-white '>
                Projects
              </span>
            </div>
            <div className='m-auto mb-10 grid w-[75vw] grid-cols-3 gap-10'>
              <div onClick={() => setIsPopUpOpen(true)} className='w-[25vw] '>
                <AddButton />
              </div>

              {isPopUpOpen && (
                <MyFormModal onDismiss={() => setIsPopUpOpen(false)} />
              )}

              {cards?.map((value: any, index: any) => (
                <div key={index}>
                  <Cards name={value.nameOfProject} desc={value.description} />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Page;
