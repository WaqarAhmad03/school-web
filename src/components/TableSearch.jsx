import Image from 'next/image'
import React from 'react'

const TableSearch = (props) => {
  return (
    <div className='md:flex justify-between items-center'>
        <h1 className='text-lg font-semibold hidden md:block'>{props.title}</h1>
        <div className='flex flex-col md:flex-row items-center gap-4 w-full md:w-auto'>
        <div className='flex items-center gap-2 border-[1.5px] border-gray-300 rounded-full px-2 py-1'>
            <div><Image src="/search.png" alt='search' width={14} height={14}/></div>
                <input type="search" placeholder='Search...' className='w-[200px] bg-transparent outline-none text-xs text-gray-600' />
            </div>
        <div className='flex gap-4 items-center self-end'>
            <button className='w-8 h-8 bg-customyellow flex items-center justify-center rounded-full'>
            <Image src="/filter.png" alt="filter" width={14} height={14}/>
            </button>
            <button className='w-8 h-8 bg-customyellow flex items-center justify-center rounded-full'>
            <Image src="/sort.png" alt="filter" width={14} height={14}/>
            </button>
            <button className='w-8 h-8 bg-customyellow flex items-center justify-center rounded-full'>
            <Image src="/plus.png" alt="filter" width={14} height={14}/>
            </button>
        </div>
        </div>
    </div>

  )
}

export default TableSearch
