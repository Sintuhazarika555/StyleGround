import React from 'react'
import { useState } from 'react'
import Html from './html'
import Css from './css'
import Java from './java'
import Output from './output'

const Ground = () => {
    const [v1, setV1] = useState("")
    const [v2, setV2] = useState("")
    const [v3, setV3] = useState("")
    return (
        <div>
            {/* html css output section */}
            <div className=" bg-gray-800 rounded-4xl  border-black border-t-8 border-b-8 
            flex justify-center flex-col 
             lg:flex-row gap-4 pt-5 pb-0 mb-0 mt-2">
                {/* html css */}
                <div>
                    <div className=" flex justify-center">
                        <Html v1={v1} setV1={setV1} />
                    </div>
                    <div className=" flex justify-center">
                        <Css setV2={setV2} />
                    </div>
                    <div className=" flex justify-center">
                        <Java setV3={setV3} />
                    </div>
                </div>
                {/* output */}
                <div className=" flex justify-center pb-10 ">
                    <Output v1={v1} v2={v2} v3={v3} />
                </div>
            </div>

        </div>
    )
}

export default Ground