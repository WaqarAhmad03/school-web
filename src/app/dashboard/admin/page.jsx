import React from 'react'
import UserCard from "../../../components/UserCard"

const AdminPage = () => {
  return (
    <div className='flex flex-col md:flex-row gap-4 p-4'>
      <div className='w-full md:w-2/3'>
        <div className='flex gap-4 justify-between flex-wrap'>
          <UserCard type="teacher"/>
          <UserCard type="student"/>
          <UserCard type="admin"/>
          <UserCard type="parent"/>
        </div>
      </div>
      <div className='w-full md:w-1/3'></div>
    </div>
  )
}

export default AdminPage
