import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-end md:justify-between items-center p-4'>
      {/* Search Bar */}
      <div className='hidden md:flex items-center gap-2 border-[1.5px] rounded-full px-2 py-1'>
        <div><Image src="/search.png" alt='search' width={14} height={14}/></div>
        <input type="search" placeholder='Search...' className='w-[200px] bg-transparent outline-none text-xs text-gray-600' />
      </div>
      {/* User */}
      <div className='flex items-center gap-6'>
        <div className='flex bg-white rounded-full w-7 h-7 justify-center items-center cursor-pointer'>
          <Image src="/message.png" alt='message' width={20} height={20}/>
        </div>
        <div className='flex bg-white rounded-full w-7 h-7 justify-center items-center cursor-pointer relative'>
          <Image src="/announcement.png" alt='message' width={20} height={20}/>
          <div className='absolute -top-1.5 -right-2 flex justify-center items-center rounded-full w-4 h-4 text-xs text-white font-light bg-purple-600'>1</div>
        </div>
        <div className='flex flex-col'>
          <span className='text-xs leading-3 font-medium'>John Doe</span>
          <span className='text-[10px] text-gray-500 text-end'>Admin</span>
        </div>
        <div>
          <Image src="/avatar.png" alt='avatar' width={36} height={36} className='rounded-full'/>
        </div>
      </div>
    </div>
  )
}

export default Navbar
