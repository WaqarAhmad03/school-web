"use client"
import React, { useState } from 'react'
import "./EventCalender.css"
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';



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
    </div>
  )
}

export default EventCalender
