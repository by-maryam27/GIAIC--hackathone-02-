import React from 'react'

function hero() {
  return (
    <>
    <main className='bg-cover bg-center h-[800px] pr-14 ' style={{backgroundImage : "url('/Rectangle 1.png')"}}>
    <div className='grid grid-cols-2'>
      <div className='pt-48'>
        <h1 className='pl-12'><img src="/Rocket single seater.png" alt="image"/>
        <button className="relative text-black font-semibold mt-4 py-2 px-4 rounded group text-2xl">
  Shop Now
  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
</button>
        </h1>
      </div>
    <div>
    <img src="/Rocket single seater 1.png" alt="image" className="pb-72"/>
    </div>
    </div>
    </main>
  <div className='grid grid-cols-2 pr-40'>
    <img src="/Mask group.png" alt="Image" />
    <img src="/Cloud sofa three seater + ottoman_3 1.png" alt="Image" />
  </div>
  <div className='grid grid-cols-2 pl-40'>
  <img src="/Side table.png" alt="image" />
  <img src="/Side table.png" alt="image"  />
  </div>

  <div className='grid grid-cols-2 pl-40'>
    <div>
  <button className="relative text-black font-semibold py-2 px-4 rounded group text-2xl">
  Shop Now
  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
</button>
</div>
<div>
<button className="relative text-black font-semibold py-2 px-4 rounded group text-2xl">
  Shop Now
  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
</button>
  </div>
  </div>
<div>
  <img src="/Group 19.png" alt="Image" />
</div>
<div>
  <img src="/Group 23.png" alt="Image" />
</div>
<div>
  <img src="/Group 54.png" alt="Image" />
</div>
<div>
  <img src="/Group 47.png" alt="Image" />
</div>
    </>
  )
}

export default hero