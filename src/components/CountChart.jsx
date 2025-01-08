"use client"
import Image from 'next/image';
import React from 'react'
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: '18-24',
    count: 106,
    fill: '#ffffff',
  },
  {
    name: '25-29',
    count: 53,
    fill: '#fae27c',
  },
  {
    name: '30-34',
    count: 53,
    fill: '#c3ebfa',
  },

];

const style = {
  top: '50%',
  right: 0,
  transform: 'translate(0, -50%)',
  lineHeight: '24px',
};


const CountChart = () => {
  return (
    <div className='bg-white rounded-xl w-full h-full p-3'>
      <div className='flex justify-between items-center'>
        <p className='text-lg font-semibold'>Students</p>
        <Image src="/moreDark.png" alt='more-dark' width={20} height={20}/>
      </div>
      <div className='w-full h-3/4 relative'>
        <ResponsiveContainer >
          <RadialBarChart cx="50%" cy="50%" innerRadius="40%" outerRadius="100%" barSize={32} data={data}>
            <RadialBar
              minAngle={15}
              // label={{ position: 'insideStart', fill: '#fff' }}
              background
              clockWise
              dataKey="count"
            />
            {/* <Legend iconSize={10} layout="vertical" verticalAlign="middle" wrapperStyle={style} /> */}
          </RadialBarChart>
        </ResponsiveContainer>
        <div className='absolute flex top-0 left-0 w-full h-full justify-center items-center'>
          <Image src="/maleFemale.png" alt='maleFemale' width={40} height={40}/>
        </div>
      </div>
      <div className='flex justify-around'>
        <div className='flex flex-col items-center gap-1'>
          <div className='w-5 h-5 bg-customsky rounded-full'></div>
          <p className='font-bold'>1,234</p>
          <p className='text-xs text-gray-300'>Boys (50%)</p>
        </div>
        <div className='flex flex-col items-center gap-1'>
          <div className='w-5 h-5 bg-customyellow rounded-full'></div>
          <p className='font-bold'>1,234</p>
          <p className='text-xs text-gray-300'>Girls (50%)</p>
        </div>
      </div>
    </div>
  )
}

export default CountChart
