import React from 'react'

const nav = ({ setShowGround }) => {

  return (
    <div className='flex justify-between items-center h-40 lg:h-10 pt-2'>
      <h1 className='bg-white border pt-2 pb-2 pl-2 pr-2 rounded-2xl text-2xl font-bold font-serif font-extrablack text-black' >
        Style Ground 
        <br/>
        <h4 className='font-extralight'>Mobile-First Coding</h4>
      </h1>
      <div className='flex justify-center flex-col 
             lg:flex-row gap-0 list-none lg:gap-3 '>

        <button className='text-black border-2 bg-white 
        p-1 rounded-xl pl-6 pr-6 hover:bg-blue-500
         hover:text-white'
          onClick={() => setShowGround(false)} >
          ABOUT
        </button>

        <button className='text-black border-2
         bg-white p-1 rounded-xl pl-6 pr-6
          hover:bg-blue-500 hover:text-white'
          onClick={() => setShowGround(true)} >
          GROUND
        </button>

        <button className='text-black border-2
         bg-white p-1 rounded-xl pl-6 pr-6
          hover:bg-blue-500 hover:text-white'
          onClick={() => window.location.href = "https://www.w3schools.com/htmlcss/default.asp"}>
          LEARN
        </button>

      </div>
      {/* <button className='bg-blue-500 text-white p-1 rounded-xl pl-6 pr-6 border-b-2 border-b-blue-800'>login</button> */}
    </div>
  )
}

export default nav