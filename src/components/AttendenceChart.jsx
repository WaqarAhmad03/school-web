"use client"
import Image from 'next/image'
import React from 'react'
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Mon',
    present: 86,
    absent: 20,
  },
  {
    name: 'Tue',
    present: 92,
    absent: 14,
  },
  {
    name: 'Wed',
    present: 60,
    absent: 46,
  },
  {
    name: 'Thurs',
    present: 76,
    absent: 30,
  },
  {
    name: 'Fri',
    present: 79,
    absent: 27,
  },
];

const AttendenceChart = () => {
  return (
    <div className='bg-white rounded-xl w-full h-full p-3'>
        <div className='flex justify-between items-center'>
            <p className='text-lg font-semibold'>Attendence</p>
            <Image src="/moreDark.png" alt='more-dark' width={20} height={20}/>
        </div>

        <ResponsiveContainer width="100%" height="90%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            // top: 5,
            // right: 30,
            left: -30,
            // bottom: 5,
          }}
        barSize={15}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke='#ddd'/>
          <XAxis dataKey="name" tick={{fill:"#d1d5db",fontSize:"10px"}} tickLine={false} axisLine={false} />
          <YAxis  tickLine={false} axisLine={false} tick={{fill:"#d1d5db",fontSize:"10px"}}/>
          <Tooltip contentStyle={{borderRadius:"10px", borderColor:"lightgray"}}/>
          <Legend align='left' verticalAlign='top' wrapperStyle={{paddingBottom:"40px", paddingTop: "20px", fontSize:"12px",paddingLeft:"30px"}}/>
          <Bar dataKey="present" fill="#fae27c" legendType='circle' radius={[10,10,0,0]} activeBar={<Rectangle fill="gold" stroke="gold" />} />
          <Bar dataKey="absent" fill="#c3ebfa" legendType='circle' radius={[10,10,0,0]} activeBar={<Rectangle fill="blue" stroke="blue" />} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default AttendenceChart
