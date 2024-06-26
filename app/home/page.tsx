'use client';
import React, { useRef } from 'react';
import Image from 'next/image';
import { Homenav } from '@/app/components';
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax';
import Features from './features';

const url = (name: string, wrap = false) =>
  `${
    wrap ? 'url(' : ''
  }https://awv3node-homepage.surge.sh/build/assets/${name}.svg${
    wrap ? ')' : ''
  }`;

export default function App() {
  const parallax = useRef<IParallax>(null!);
  return (
    <>
      <div>
        <Homenav />
      </div>

      <div className='h-screen w-screen bg-[#002C47]'>
        <Parallax ref={parallax} pages={3}>
          <ParallaxLayer
            offset={1}
            speed={1}
            style={{ backgroundColor: '#DD817E' }}
          />
          <ParallaxLayer
            offset={2}
            speed={1}
            style={{ backgroundColor: '#87BCDE' }}
          />

          <ParallaxLayer
            offset={0}
            speed={0}
            factor={3}
            style={{
              backgroundImage: url('stars', true),
              backgroundSize: 'cover',
            }}
          />

          <ParallaxLayer
            offset={1.3}
            speed={-0.3}
            style={{ pointerEvents: 'none' }}
          >
            <Image
              src='/birdi.gif'
              alt=''
              width={30}
              height={30}
              className='absolute ml-[62%] h-[30%] w-[15%]'
            />
          </ParallaxLayer>

          <ParallaxLayer offset={1} speed={0.8} style={{ opacity: 0.1 }}>
            <Image
              alt='cloud'
              width={10}
              height={10}
              src={url('cloud')}
              style={{ display: 'block', width: '20%', marginLeft: '55%' }}
            />
            <Image
              alt='cloud'
              width={10}
              height={10}
              src={url('cloud')}
              style={{ display: 'block', width: '10%', marginLeft: '15%' }}
            />
          </ParallaxLayer>

          <ParallaxLayer offset={1.75} speed={0.5} style={{ opacity: 0.1 }}>
            <Image
              alt='cloud'
              width={10}
              height={10}
              src={url('cloud')}
              style={{ display: 'block', width: '20%', marginLeft: '70%' }}
            />
            <Image
              alt='cloud'
              width={10}
              height={10}
              src={url('cloud')}
              style={{ display: 'block', width: '20%', marginLeft: '40%' }}
            />
          </ParallaxLayer>

          <ParallaxLayer offset={1} speed={0.2} style={{ opacity: 0.2 }}>
            <Image
              alt='cloud'
              width={10}
              height={10}
              src={url('cloud')}
              style={{ display: 'block', width: '10%', marginLeft: '10%' }}
            />
            <Image
              alt='cloud'
              width={10}
              height={10}
              src={url('cloud')}
              style={{ display: 'block', width: '20%', marginLeft: '75%' }}
            />
          </ParallaxLayer>

          <ParallaxLayer offset={1.6} speed={-0.1} style={{ opacity: 0.4 }}>
            <Image
              alt='cloud'
              width={10}
              height={10}
              src={url('cloud')}
              style={{ display: 'block', width: '20%', marginLeft: '60%' }}
            />
            <Image
              alt='cloud'
              width={10}
              height={10}
              src={url('cloud')}
              style={{ display: 'block', width: '25%', marginLeft: '30%' }}
            />
            <Image
              alt='cloud'
              width={10}
              height={10}
              src={url('cloud')}
              style={{ display: 'block', width: '10%', marginLeft: '80%' }}
            />
          </ParallaxLayer>

          <ParallaxLayer offset={2.6} speed={0.4} style={{ opacity: 0.6 }}>
            <Image
              alt='cloud'
              width={10}
              height={10}
              src={url('cloud')}
              style={{ display: 'block', width: '20%', marginLeft: '5%' }}
            />
            <Image
              alt='cloud'
              width={10}
              height={10}
              src={url('cloud')}
              style={{ display: 'block', width: '15%', marginLeft: '75%' }}
            />
          </ParallaxLayer>

          <ParallaxLayer
            offset={2.4}
            speed={-0.4}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              pointerEvents: 'none',
            }}
          >
            <Image
              src='/forest.png'
              width={600}
              height={600}
              alt=''
              className='relative left-20 h-[30vh] w-[35%]'
            />
            <Image
              src='/forest.png'
              width={600}
              height={600}
              alt=''
              className='h-[30vh] w-[35%]'
            />
            <Image
              src='/forest.png'
              width={600}
              height={600}
              alt=''
              className='relative right-20 h-[30vh] w-[35%]'
            />
          </ParallaxLayer>

          <ParallaxLayer
            offset={1.6}
            speed={-0.3}
            style={{
              backgroundSize: '80%',
              backgroundPosition: 'center',
              backgroundImage: url('clients', true),
            }}
          />

          <ParallaxLayer
            offset={0}
            speed={0.1}
            onClick={() => parallax.current.scrollTo(1)}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Image
              src='/font2.png'
              width={500}
              height={500}
              alt=''
              className='mb-20 mr-10 w-[30%]'
            />
            <p className='text-align mb-20 items-center text-white'>
              Your Green Future,
              <br />
              Tokenized for a Sustainable World!
            </p>
          </ParallaxLayer>

          <ParallaxLayer
            offset={1.9}
            speed={-0}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onClick={() => parallax.current.scrollTo(0)}
          >
            <Image
              src='/web1.jpeg'
              alt=''
              width={500}
              height={500}
              className='h-[55%] w-[45%]'
            />
          </ParallaxLayer>
        </Parallax>
      </div>

      <div>
        <div className='pb-10 pt-10'>
          <Features />
        </div>
      </div>
    </>
  );
}
