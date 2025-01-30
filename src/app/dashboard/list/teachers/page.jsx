import React from 'react'
import TableSearch from '../../../../components/TableSearch'
import Pagination from '../../../../components/Pagination'

const TeacherList = () => {
  return (
    <div className='p-4 m-4 bg-white rounded-md flex flex-col'>
      <TableSearch title="All Teachers"/>
      <Pagination/>
    </div>
  )
}

export default TeacherList
