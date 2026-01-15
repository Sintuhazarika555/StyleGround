import { useState } from 'react'
import './App.css'
import Nav from './components/nav'
import Ground from './components/ground'
import About from './components/about'
import background from './bg.png'

function App() {
  const [showGround, setShowGround] = useState(false);

  return (

    <div
      style={{ backgroundImage: `url(${background})` }}
      className="min-h-screen w-full flex flex-col bg-black bg-cover bg-center bg-no-repeat bg-fixed overflow-x-hidden"
    >

      <div className="p-5 w-full">
        <Nav setShowGround={setShowGround} />
      </div>


      <div className="grow w-full flex flex-col items-center p-5 backdrop-blur-[2px]">
        <div className="w-full max-w-7xl"> 
          {showGround ? <Ground /> : <About />}
        </div>
      </div>

      {/* Footer Area */}
      <footer className="w-full mt-auto">
        <p className="bg-white/80 backdrop-blur-md rounded-2xl m-5 p-2 flex justify-center text-center font-medium shadow-lg">
          © 2026 Style Ground. All rights reserved.
        </p>
      </footer>
    </div>
  )
}

export default App