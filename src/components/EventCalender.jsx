"use client"
import React, { useState } from 'react'
import "./EventCalender.css"
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Image from 'next/image';

const eventsDemo = [
    {
      id: 1,
      title: 'Meeting with Team',
      time: '10:00 AM - 11:00 AM',
      description: 'Discuss project updates and next steps.'
    },
    {
      id: 2,
      title: 'Lunch Break',
      time: '12:30 PM - 1:30 PM',
      description: 'Take a break and enjoy lunch.'
    },
    {
      id: 3,
      title: 'Client Call',
      time: '3:00 PM - 4:00 PM',
      description: 'Call with the client to review feedback and discuss requirements.'
    }
  ];

// const ValuePiece = Date | null;

// const Value = ValuePiece | [ValuePiece, ValuePiece];

const EventCalender = () => {
    const [value, setValue] = useState(new Date());

    const handleChange = (newValue) => {
      setValue(newValue);
    };
  return (
    <div className='p-4 rounded-md bg-white'>
      <Calendar onChange={handleChange} value={value} />
        <div className='flex justify-between items-center'>
            <p className='text-lg font-semibold mt-4'>Events</p>
            <Image src="/moreDark.png" alt='more-dark' width={20} height={20}/>
        </div>
      <div className='flex flex-col gap-4'>
        {eventsDemo.map(event=>{
            return <div key={event}>
                <div className='p-3 rounded-md border-2 border-gray-100 border-t-4 odd:border-t-customsky even:border-t-custompurple'>
                    <div className=''>
                        <p className='text-gray-600 text-xs md:text-sm font-semibold xl:text-base'>{event.title}</p>
                        <p className='text-gray-300 text-xs text-end -mt-1.5'>{event.time}</p>
                    </div>
                    <p className='mt-2 text-gray-400 text-xs xl:text-sm'>{event.description}</p>
                </div>
            </div>
        })}
      </div>
    </div>
  )
}

export default EventCalender
