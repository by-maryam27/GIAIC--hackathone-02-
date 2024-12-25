

import React from 'react';
import Image from "next/image";
import Link from "next/link";

const Hero = () => {

  const products = [
    {
      id: 1,
      name: "Trenton modular sofa_3",
      price: "Rs. 25,000.00",
      image: "/Mask group (2).png",
    },
    {
      id: 2,
      name: "Granite dining table with dining chair",
      price: "Rs. 25,000.00",
      image: "/Mask group (3).png",
    },
    {
      id: 3,
      name: "Outdoor bar table and stool",
      price: "Rs. 25,000.00",
      image: "/Outdoor bar table and stool 1.png",
    },
    {
      id: 4,
      name: "Plain console with teak mirror",
      price: "Rs. 25,000.00",
      image: "/Mask group (4).png",
    },
  ];
  const products2 = [
    {
      id: 5,
      name: "Going all-in with millennial design",
      price: "Read More",
      image: "/Rectangle 13.png",
    },
    {
      id: 6,
      name: "Going all-in with millennial design",
      price: "Read More",
      image: "/Rectangle 14.png",
    },
    {
      id: 7,
      name: "Going all-in with millennial design",
      price: "Read More",
      image:"/Rectangle 15.png",
    },
  ];


  return (
    <>
    <div className="bg-[#FBEBB5]">
      {/* Container */}
      <div className="max-w-[1440px] mx-auto flex flex-col sm:flex-row items-center sm:justify-between py-8 px-4 sm:px-16 lg:px-32">
        {/* Text Section */}
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left sm:w-1/2">
          <p className="text-[24px] sm:text-[36px] lg:text-[64px] font-medium leading-[1.2]">
            Rocket single seater
          </p>
          <Link href={"/shop"}>
          <button className="relative text-black font-bold mt-6 py-2 px-6 rounded group text-lg sm:text-xl mx-auto md:mx-0">
                Shop Now
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
              </button>
              </Link>
        </div>

        {/* Image Section */}
        <div className="mt-8 sm:mt-0 sm:w-1/2 flex justify-center">
          <Image
            src="/Rocket single seater 1.png"
            alt="Hero Image"
            width={803}
            height={1000}
            className="w-[80%] sm:w-[70%] lg:w-[100%] object-cover"
          />
        </div>
      </div>
    </div>

<div>
{/* view more section */}

<div className="max-w-[1440px] min-h-[850px] bg-[#FAF4F4] py-10">
{/* Grid Layout */}
<div className="grid gap-8 md:grid-cols-2 max-w-7xl">
{/* First Image Section */}
<div className="flex flex-col items-center">
  <Image
    src="/Mask group.png"
    alt="Side Table 1"
    width={605}
    height={562}
    className="mr-28 cursor-pointer transition-transform hover:scale-105"
  />
  <div className="sm:mr-32 sm:-mt-20">
    <p className="font-[500] text-[24px] md:text-[36px] leading-[36px] md:leading-[54px]">
      Side Table
    </p>
    <Link href='/shop'>
    <p className="underline underline-offset-8 mt-2 cursor-pointer font-[500] text-[16px] transition-transform hover:scale-105 hover:text-gray-700">
      View More
    </p>
    </Link>
  </div>
</div>

{/* Second Image Section */}
<div className="flex flex-col items-center">
  <Image
    src="/Cloud sofa three seater + ottoman_3 1.png"
    alt="Side Table 2"
    width={605}
    height={562}
    className="mr-28 cursor-pointer transition-transform hover:scale-105"
  />
  <div className="sm:mr-32 sm:-mt-20">
    <p className="font-[500] text-[24px] md:text-[36px] leading-[36px] md:leading-[54px]">
      Side Table
    </p>
    <Link href='/shop'>
    <p className="underline underline-offset-8 mt-2 cursor-pointer font-[500] text-[16px] transition-transform hover:scale-105 hover:text-gray-700">
      View More
    </p>
    </Link>
 
  </div>
</div>
</div>
</div>

</div>

<div>
     {/* Top Picks Section */}
<div className="max-w-[1440px] min-h-[800px] ">
  {/* Section Header */}
  <div className="flex flex-col items-center text-center">
    <p className="font-[500] text-[36px] leading-[54px] mt-20">
      Top Picks For You
    </p>
    <p className="font-[500] text-[16px] leading-[24px] text-[#9F9F9F] mt-5 max-w-2xl">
      Find a bright ideal to suit your taste with our great selection of
      suspension, floor, and table lights.
    </p>
  </div>

  {/* Image Grid */}
  <div>
    <div className="flex justify-center">
      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10 px-4 sm:px-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer transition-transform hover:scale-105"
          >
            <Image
              src={product.image}
              alt={product.name}
              width={300}
              height={300}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900">
                {product.name}
              </h3>
              <p className="text-gray-600 mt-2">{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* View More Button */}
    <div className="flex justify-center mt-28">
      <Link href='/shop'>
      <p className="underline underline-offset-8 mt-2 cursor-pointer font-[500] text-[16px] transition-transform hover:scale-105 hover:text-gray-700">
        View More
      </p>
      </Link>
    </div>
  </div>
</div>

    <div>
         {/* new arrivals */}

      <div className="bg-[#FFF9E5] max-w-[1440px] h-auto py-10">
        <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-center">
          {/* Image Section */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <Image
              src={"/Asgaard sofa 1.png"}
              alt="pic8"
              width={983}
              height={799}
              className="w-full  object-cover"
            />
          </div>
          {/* Text Section */}
          <div className="w-full lg:w-1/2 flex flex-col items-center text-center sm:pt-32 mt-6 lg:px-10">
            <div className="mb-6">
              <p className="font-[500] text-[24px] leading-[36px]">
                New Arrivals
              </p>
              <p className="font-[700] text-[36px] md:text-[48px] leading-[48px] md:leading-[72px]">
                Asgaard Sofa
              </p>
            </div>
            <div className="mt-4">
              <Link
                href="/shop"
                className="text-[16px] md:text-[20px] leading-[28px] font-[500] text-[#000000] border border-[#9b9b9b] py-3 px-6 inline-block hover:bg-[#faeec7] transition-colors"
              >
                Order Now
              </Link>
            </div>
          </div>
        </div>
      </div>
      
    </div>

      {/* our blog  */}
      <div className="max-w-[1440px] min-h-[844px] bg-[#FFFFFF] px-11 ">
      <div className="flex flex-col items-center text-center">
          <p className="font-[500] text-[36px] leading-[54px]">Our Blogs</p>
          <p className="text-[#9F9F9F] font-[500] text-[16px] leading-[24px] mt-4">
            Find a bright ideal to suit your taste with our great selection
          </p>
        </div>
        <div className="flex justify-center items-center">
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-5 ">
            {products2.map((product) => (
              <div
                key={product.id}
                className="bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer transition-transform hover:scale-105"
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  width={300}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {product.name}
                  </h3>
                </div>
                <p className="text-gray-600 mt-2">{product.price}</p>
              </div>
            ))}
          </div>
          
       
        </div>
        <div className="flex justify-center mt-28">
          <Link href='/shop'>
          <p className="underline underline-offset-8 mt-2 cursor-pointer font-[500] text-[20px] transition-transform hover:scale-105 hover:text-gray-700">
            View All Post
          </p>
          </Link>
        </div>

      </div>

     

      {/* contact to instagram   */}

      <div className="relative w-full h-auto">
        {/* Image Section */}
        <div className="w-full h-[450px]">
          <Image
            src={"/Group 43.png"}
            alt="pic12"
            width={1440}
            height={450}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4">
          <div className="text-center">
            <p className="font-bold text-[40px] md:text-[60px] leading-[50px] md:leading-[90px]">
              Our Instagram
            </p>
            <p className="font-[400] text-[16px] md:text-[20px] leading-[24px] md:leading-[30px]">
              Follow our store on Instagram
            </p>
          </div>
          <div>
            <Link href='https://www.instagram.com/'>
            <button className="w-[200px] h-[50px] md:w-[255px] md:h-[64px] rounded-full bg-white transition-transform hover:scale-105 text-black font-[500] text-[16px] md:text-[20px] drop-shadow-lg">
              Follow Us
            </button>
            </Link>
          </div>
        </div>
      </div>
    </div>


</>
  );
};

export default Hero;