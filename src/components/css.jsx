import React from 'react'

const css = ({ setV2 }) => {
    return (
        <div>
            <h5 className='text-white text-xl font-bold mb-1'>Compile your CSS Code here</h5>
            <textarea className="rounded-l-xl shadow-lg shadow-white 
            shadow-xl/30 bg-gray-800 text-amber-50 border m-2 
            mt-0 p-2 w-70 md:w-150 h-45 md:h-45" rows="4" cols="50" 
            onChange={(e) => setV2(e.target.value)} placeholder='write css code here'></textarea>
            <br/>
        </div>
    )
}

export default css