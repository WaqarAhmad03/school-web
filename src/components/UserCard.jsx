import Image from 'next/image'
import React from 'react'

const UserCard = ({type}) => {
  return (
    <div className='rounded-2xl odd:bg-custompurple even:bg-customyellow p-4 flex-1 min-w-[130px]'>
      <div className='flex justify-between items-center'>
        <span className='text-[10px] bg-white px-2 py-1 rounded-full text-green-600'>
            2024/25
        </span>
        <Image src="/more.png" alt='more' width={20} height={20}/>
      </div>
        <p className='text-2xl font-semibold my-4'>1,234</p>
        <p className='capitalize text-sm font-medium text-gray-500'>{type}s</p>
    </div>
  )
}

export default UserCard
