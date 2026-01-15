import React from 'react'

const output = ({ v1, v2, v3 }) => {
    const finalcode = `
            <!DOCTYPE html>
            <html>
                <head>
                    <style>
                        ${v2}
                    </style>
                </head>
                <body>
                    ${v1}
                <script>
                    ${v3}
                </script>
                </body>
            </html>
            `;
    return (
        <div className=" p-2">
            <div className='flex justify-between items-center mb-2'>
            <h4 className='text-white text-xl font-bold mb-1'>Output Overview</h4>
            {/* for future plan : we can add a button to save the work and generate a certificate containing name of user with there work */}
            {/* <button className='bg-blue-500 text-white  rounded-xl pl-6 pr-6 border-b-2 border-b-blue-800'>save work</button> */}
            </div>
            <iframe className="rounded-xl shadow-lg shadow-white shadow-xl/30 border border-amber-50 w-full aspect-15/17 md:w-150 md:h-170 bg-white" title="output" srcDoc={finalcode}></iframe>

        </div>
    )
}

export default output