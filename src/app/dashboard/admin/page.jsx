import React from 'react'
import UserCard from "../../../components/UserCard"
import CountChart from "../../../components/CountChart"
import AttendenceChart from "../../../components/AttendenceChart"
import FinanceChart from "../../../components/FinanceChart"
import EventCalender from "../../../components/EventCalender"
// import { RadialBarChart } from 'recharts'

const AdminPage = () => {
  return (
    <div className='flex flex-col md:flex-row gap-4 p-4'>
      <div className='w-full md:w-2/3 flex flex-col gap-8'>
        <div className='flex gap-4 justify-between flex-wrap'>
          <UserCard type="teacher"/>
          <UserCard type="student"/>
          <UserCard type="admin"/>
          <UserCard type="parent"/>
        </div>

        <div className='flex flex-col lg:flex-row gap-4'>
          <div className='w-full lg:w-1/3 h-[450px]'>
            <CountChart/>
          </div>
          <div className='w-full lg:w-2/3 h-[450px]'>
            <AttendenceChart/>
          </div>
        </div>

        <div className='w-full h-[500px]'>
          <FinanceChart/>
        </div>
        
      </div>
      <div className='w-full md:w-1/3 flex flex-col gap-8'>
        <EventCalender/>
      </div>
    </div>
  )
}

export default AdminPage
