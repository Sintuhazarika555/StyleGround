import React from 'react'

const html = ({ v1, setV1 }) => {

    const c1 = `<div>
            <h3>Current Mood</h3>
            <button>Happy</button>
            <button>Chill</button>
            <button>Energetic</button>
            </div>
            // now play with css & js`

    const c2 = `<div>
    <h3>Task Manager</h3>
  <ul>
    <li>Get milk <button>Done</button></li>
    <li>Code daily <button>Done</button></li>
  </ul>
</div>
// now play with css & js`

    const c3 = `<div>
  <div>0</div>
  <button>Decrease</button>
  <button>Increase</button>
</div>
// now play with css & js`

    const c4 = `<div>
  <div>
    <button>Tab 1</button>
    <button>Tab 2</button>
  </div>
  <div>
    <p>Content area for the selected tab.</p>
  </div>
</div>
// now play with css & js`

    const c5 = `<div>
  <h2>User Profile</h2>
  <ul>
    <li>Design</li>
    <li>Coding</li>
    <li>Music</li>
  </ul>
  <button>Follow</button>
</div>
// now play with css & js`

    const c6 = `<div>
  <button>Previous</button>
  <ul>
    <li><button>1</button></li>
    <li><button>2</button></li>
    <li><button>3</button></li>
  </ul>
  <button>Next</button>
</div>
// now play with css & js`

    const c7 = `<div>
  <span>Product Name</span>
  <div>
    <button>-</button>
    <span>1</span>
    <button>+</button>
  </div>
  <button>Remove</button>
</div>
// now play with css & js`

    const c8 = `<div>
  <p>Select Language:</p>
  <ul>
    <li><button>English</button></li>
    <li><button>Spanish</button></li>
    <li><button>French</button></li>
  </ul>
</div>
// now play with css & js`

    const c9 = `<div>
  <p>Your changes have been saved!</p>
  <button>Dismiss</button>
</div>
// now play with css & js`

    const c10 = `<div>
  <div>Video Player Box</div>
  <div>
    <button>Play</button>
    <button>Pause</button>
    <button>Stop</button>
  </div>
</div>
// now play with css & js`

    const samples = [c1, c2, c3, c4, c5, c6, c7, c8, c9, c10];

    return (
        <div className="p-2">
            <h5 className='text-white text-xl font-bold mb-1'>Compile your HTML Code here

            </h5>
            <button
                onClick={() => setV1(samples[Math.floor(Math.random() * samples.length)])}
                className="ml-2 mb-2 text-sm border  bg-gray-800  hover:bg-blue-300 text-white hover:shadow-white font-bold  py-1 px-2 rounded">
                Or Generate Code
            </button>


            <br />
            <textarea
                className=" rounded-l-xl shadow-lg shadow-white shadow-xl/30 bg-gray-800
               text-amber-50 border m-2 mt-0 p-2 w-70 md:w-150 lg:w-150 h-45 md:h-45"
                rows="4" cols="50"
                value={v1}
                onChange={(e) => setV1(e.target.value)}
                placeholder="Type here html code">
            </textarea>

        </div>
    )
}

export default html

