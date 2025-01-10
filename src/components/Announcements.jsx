import React from 'react'

const announceDemo = [
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


const Announcements = () => {
  return (
    <div className='bg-white rounded-md p-4'>
        <div className='flex justify-between items-center'>
            <p className='text-lg font-semibold'>Announcements</p>
            <span className='text-gray-400 text-xs'>View All</span>
        </div>
        <div className='flex flex-col gap-4'>
            <div className='p-3 rounded-md bg-customlightsky'>
                <div className='flex flex-wrap justify-between items-center'>
                    <p className='text-gray-600 text-xs md:text-sm font-semibold xl:text-base'>Meeting with Team</p>
                    <p className='text-gray-300 text-xs rounded-sm text-end bg-white px-1'>12:30 PM</p>
                </div>
                <p className='mt-1 text-gray-400 text-xs xl:text-sm'>Call with the client to review feedback and discuss requirements.</p>
            </div>
            <div className='p-3 rounded-md bg-customlightpurple'>
                <div className='flex flex-wrap justify-between items-center'>
                    <p className='text-gray-600 text-xs md:text-sm font-semibold xl:text-base'>Meeting with Team</p>
                    <p className='text-gray-300 text-xs rounded-sm text-end bg-white px-1'>12:30 PM</p>
                </div>
                <p className='mt-1 text-gray-400 text-xs xl:text-sm'>Call with the client to review feedback and discuss requirements.</p>
            </div>
            <div className='p-3 rounded-md bg-customlightyellow'>
                <div className='flex flex-wrap justify-between items-center'>
                    <p className='text-gray-600 text-xs md:text-sm font-semibold xl:text-base'>Meeting with Team</p>
                    <p className='text-gray-300 text-xs rounded-sm text-end bg-white px-1'>12:30 PM</p>
                </div>
                <p className='mt-1 text-gray-400 text-xs xl:text-sm'>Call with the client to review feedback and discuss requirements.</p>
            </div>
        </div>
    </div>
  )
}

export default Announcements
