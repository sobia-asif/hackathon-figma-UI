import React from "react";
import Image from "next/image";
import Link from "next/link";
import { TfiArrowCircleRight } from "react-icons/tfi";
import { TfiArrowCircleLeft } from "react-icons/tfi";


export default function Hero() {
  return (
    <section className="flex items-center flex-col bg-light-grey py-2 px-10">
      <h2>Hello Nike App</h2>
      <p>Download the app to access everything Nike. <Link href="#">Get Your Great</Link></p>
     <Image src={'/nike-banner.jpg'} 
     alt={"banner"} 
     width={1344} 
    height={700}/> 


      <div className="flex flex-col items-center  py-8 px-10">
        <h3>First Look</h3>
        <h2 className="text-5xl uppercase font-semibold  py-2 px-10 ">Nike Air Max Pulse</h2>
        <p className="w-1/2 text-center   py-2 px-10">Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Pulse
        —designed to push you past your limits and help you go to the max.</p>
      </div>

      <div className="flex justify-center">
        <Link href={"#contact"}>
        <button className="ml-4 inline-flex text-white bg-black border-2 py-1 px-6 rounded-full focus:outline-none text-lg">
          Contact
        </button>
        </Link>
        <button className="ml-4 inline-flex text-white  bg-black border-2 py-1 px-6  rounded-full focus:outline-none text-lg">
          Shop Air Max
        </button>  
      </div>


      <div className="w-full flex  justify-between items-center py-8 px-9 bg-[#F5F5F5]">

      <span className="ml-3 text-white-xl">Best of Air Max</span>
      <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">shop</span>
      <span className="flex text-black px-4 py-2 justify-between gap-3">
      <TfiArrowCircleLeft />
      <TfiArrowCircleRight />
       </span>
       </div>


<div className="flex flex-wrap -m-4 ">
      <div className="lg:w-1/3 sm:w-1/2 p-2">
        <div className="flex relative">
      <Image 
      src={'/pic/frame 22.jpg'} 
      alt={"shose"} 
      className="absolute inset-0 w-full h-full object-cover object-center"
      width={441.36} 
     height={510.36}
     />
</div>
   </div>
      </div>


<div className="flex flex-wrap -m-4">
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
        <Image 
      src={'/pic/Frame.jpg'} 
      alt={"shose"} 
      className="absolute inset-0 w-full h-full object-cover object-center"
      width={441.36} 
     height={510.36}
     />

</div>
        </div>
      </div>


<div className="flex flex-wrap -m-4">
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
        <Image 
      src={'/pic/Frame (1).jpg'} 
      className="absolute inset-0 w-full h-full object-cover object-center"
      alt={"shose"} 
      width={441.36} 
     height={510.36}
     />
          </div>
        </div>
      </div>

      <div className="w-full flex  justify-between items-center py-8 px-9 bg-white">

<span className="ml-3 text-white-xl"> Featured</span>

</div>





    </section>

    

);
}


