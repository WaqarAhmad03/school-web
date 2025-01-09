"use client"
import Image from 'next/image';
import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    { name: 'Jan', expense: 4000, profit: 2400 },
    { name: 'Feb', expense: 3000, profit: 1398 },
    { name: 'Mar', expense: 2000, profit: 9800 },
    { name: 'Apr', expense: 2780, profit: 3908 },
    { name: 'May', expense: 1890, profit: 4800 },
    { name: 'Jun', expense: 2390, profit: 3800 },
    { name: 'Jul', expense: 3490, profit: 4300 },
    { name: 'Aug', expense: 3000, profit: 2100 },
    { name: 'Sep', expense: 4000, profit: 3200 },
    { name: 'Oct', expense: 2500, profit: 2900 },
    { name: 'Nov', expense: 3700, profit: 2400 },
    { name: 'Dec', expense: 2900, profit: 4100 },
];

const FinanceChart = () => {
  return (
    <div className='bg-white rounded-xl w-full h-full p-3'>
        <div className='flex justify-between items-center'>
            <p className='text-lg font-semibold'>Finance</p>
            <Image src="/moreDark.png" alt='more-dark' width={20} height={20}/>
        </div>
        <ResponsiveContainer width="100%" height="90%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            // top: 5,
            // right: 30,
            left: -18,
            // bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke='#ddd'/>
          <XAxis dataKey="name" tickMargin={10} tickLine={false} axisLine={false} tick={{fill:"#d1d5db",fontSize:"10px"}}/>
          <YAxis tickMargin={10} tickLine={false} axisLine={false} tick={{fill:"#d1d5db",fontSize:"10px"}}/>
          <Tooltip contentStyle={{borderRadius:"10px", borderColor:"lightgray", fontSize:"12px"}}/>
          <Legend  align='center' verticalAlign='top' wrapperStyle={{paddingBottom:"40px", paddingTop: "20px",paddingLeft: "30px", fontSize:"12px"}}/>
          <Line type="monotone" dataKey="profit" strokeWidth={3} stroke="#cfceff" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="expense" strokeWidth={3} stroke="#c3ebfa" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default FinanceChart
