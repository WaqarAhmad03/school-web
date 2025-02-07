import React from 'react'

const Pagination = () => {
  return (
    <>
        <div className="p-4 flex items-center justify-between text-gray-500">
        <button
            disabled
            className="py-2 px-4 rounded-md bg-slate-200 text-xs font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
        >
            Prev
        </button>
        <div className="hidden sm:flex items-center gap-2 text-sm">
            <button className="px-2 rounded-sm bg-customsky">1</button>
            <button className="px-2 rounded-sm ">2</button>
            <button className="px-2 rounded-sm ">3</button>
            ...
            <button className="px-2 rounded-sm ">10</button>
        </div>
        <button className="py-2 px-4 rounded-md bg-slate-200 text-xs font-semibold disabled:opacity-50 disabled:cursor-not-allowed">
            Next
        </button>
        </div>
        
      <div className="flex items-center justify-center text-gray-500 gap-2 text-sm sm:hidden">
        <button className="px-2 rounded-sm bg-customsky">1</button>
        <button className="px-2 rounded-sm ">2</button>
        <button className="px-2 rounded-sm ">3</button>
        ...
        <button className="px-2 rounded-sm ">10</button>
      </div>
    </>
  )
}

export default Pagination
