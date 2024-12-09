import React from 'react'

function Shop() {
  return (
<main>
 <div className="relative bg-cover bg-center pt-48 pr-14" style={{ backgroundImage: "url('/Rectangle 1 (1).png')" }}>
          {/* Second Image */}
          <img src="/Group 55.png" alt="img" className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-auto h-auto" />
          <div className="px-14 py-4 flex justify-center ml-16 pb-16">
    <nav className="text-gray-600 ">
      <a href="/" className="hover:text-gray-400 font-sans font-bold text-xl">Home</a>
      <span className="mx-2 "></span>
      <a href="/shop" className="hover:text-gray-400  font-sans font-bold text-xl">Shop</a>
   </nav>
  </div>
  </div>
<div>
  <img src="/Group 63.png" alt="Image" />
</div>

  <div className='mb-8'>
<img src="/Group 79.png" alt="Image" />
    </div>
    </main>
  )
}

export default Shop