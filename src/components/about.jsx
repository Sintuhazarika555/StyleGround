import React from 'react'
import background1 from '../bg.png'

const about = () => {
    return (
        <div className='bg-gray-500 rounded-4xl border-t-10 border-b-10 border-b-black m-10 mt-2 p-5 text-justify ' >
            <div
                style={{ backgroundImage: `url(${background1})` }}
                className=" bg-cover bg-center rounded-b-2xl flex justify-center pt-10 pb-10 mb-5">
                <h1 className="text-black bg-white rounded-2xl font-extrabold text-6xl mb-6 p-0">
                    Style Ground
                </h1>
            </div>
            <div>
                <span className="text-white bg-gray-600 px-3 py-1 mt-3 rounded-full text-xs font-bold tracking-widest uppercase shadow-lg">
                    Mobile-First Coding
                </span>
            </div>


            <section className="mb-8 text-white">
                <h2 className="text-2xl font-semibold mb-3">Our Mission</h2>
                <p className="text-lg">
                    We believe that a laptop shouldn't be a requirement to learn how to build the web.
                    <strong> Style Ground</strong> is a dedicated space for those who code on the go.
                    Whether you're on a bus or at home without a PC, our platform turns your phone into a creative studio for HTML, CSS, and JavaScript.
                </p>
            </section>

            <div className="grid md:grid-cols-2 gap-8 mb-8 ">
                <div className="bg-gray-100 p-6 rounded-lg shadow-sm  ">
                    <h3 className="text-xl font-bold mb-2">Mobile Compilation</h3>
                    <p>
                        Optimized input fields designed specifically for mobile keyboards. Code comfortably and see your results render instantly in the Output Overview.
                    </p>
                </div>
                <div className="bg-gray-100 p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-bold mb-2">Instant Feedback</h3>
                    <p>
                        Learning is faster when you see changes immediately. Our platform synchronizes your code with the output window, making debugging on mobile a breeze.
                    </p>
                </div>
            </div>

            <section className="text-center bg-black text-white p-8 rounded-xl">
                <h2 className="text-2xl font-semibold mb-4 text-blue-400">Start Your Journey</h2>
                <p className="mb-4">
                    "Every master was once a beginner." Your phone is now your most powerful tool.
                    Let's build something amazing today.
                </p>
                <div className="flex justify-center gap-4 text-sm opacity-75">
                    <span>#LaptopFree</span>
                    <span>#PhoneCoder</span>
                </div>
                <div className="flex justify-center gap-4 text-sm opacity-75">
                    <span>#WebDEv</span>
                    <span>#StyleGround</span>
                </div>
            </section>
        </div>
    )
}

export default about