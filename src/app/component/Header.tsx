import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaHeart } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";


const Header = () => {
  return (
    <div>
      <div className="flex justify-between items-center px-10 ">
        {/* Top Logo */}
        <Image 
      src={'/Frame.png'} 
      alt={'logo'} 
      width={24} 
      height={24}
      />
        
        {/* Top Navigation */}
        <ul className="flex space-x-6 py-3">
          <li className="flex items-center border-r border-black pr-6">
            <Link href="/store" className="leading-[14px]">
              Find a Store
            </Link>
          </li>
          <li className="flex items-center border-r border-black pr-6">
            <Link href="/help" className="leading-[14px]">
              Help
            </Link>
          </li>
          <li className="flex items-center border-r border-black pr-6">
            <Link href="/join" className="leading-[14px]">
              Join Us
            </Link>
          </li>
          <li className="flex items-center pr-6">
            <Link href="/sign-in" className="leading-[14px]">
              Sign In
            </Link>
          </li>
        </ul>
      </div>

      
      <div className="flex px-10 justify-between items-center py-4 bg-white">
      <Image 
      src={'/Frame 2.png'} 
      alt={'logo'} 
      width={78.47} 
      height={78.47}
      />
        <ul className="flex space-x-6">
            <li>
                <Link href="#">New & Featured</Link>
            </li>
            <li>
                <Link href="#">Men</Link>
            </li>
            <li>
                <Link href="#">Women</Link>
            </li>
            <li>
                <Link href="#">Kids</Link>
            </li>
            <li>
                <Link href="#">Sale</Link>
            </li>
            <li>
                <Link href="#">SNKRS</Link>
            </li>
        </ul>

         {/* Right section (Search, Wishlist, Cart) */}
      <div className="flex items-center gap-4 mt-4 md:mt-0">
        {/* Search Bar */}
        <div className="relative hidden md:block">
          <input
            type="text"
            placeholder="Search"
            className="border border-gray-300 rounded-full pl-4 pr-10 py-2 text-sm focus:outline-none"
          />
          {/* <FaSearch className="absolute right-3 top-2.5 text-gray-500" /> */}
        </div>
        <FaHeart className="text-gray-700 md:w-[24px] md:h-[24px] sm:w-[20px] sm:h-[20px] w-[16px] h-[16px]  cursor-pointer hover:text-black" />
        <FaShoppingBag className="text-gray-700 md:w-[24px] md:h-[24px] sm:w-[20px] sm:h-[20px] w-[16px] h-[16px] cursor-pointer hover:text-black" /> 
      </div> 
    </div>


 {/* Mobile Search Bar */}
    <div className="block md:hidden px-6 mt-2">
      <div className="relative">
        <input
          type="text"
          placeholder="Search"
          className="border border-gray-300 rounded-full pl-4 pr-10 py-2 text-sm focus:outline-none w-full"
        />
       <FaSearch className="absolute right-3 top-2.5 text-gray-500" />

      </div>
      
    </div>
        </div> 
     
  );
};

export default Header;