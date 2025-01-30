import React from 'react'
import EventCalender from "../../../components/EventCalender"
import Announcements from "../../../components/Announcements"
import BigCalender from "../../../components/BigCalender"

const StudentPage = () => {
  return (
    <div className='flex flex-col xl:flex-row gap-4 p-4'>
      <div className='w-full xl:w-2/3'>
        <BigCalender/>
      </div>
      <div className='w-full xl:w-1/3 flex flex-col gap-8'>
        <EventCalender/>
        <Announcements/>
      </div>
    </div>
  )
}

export default StudentPage
