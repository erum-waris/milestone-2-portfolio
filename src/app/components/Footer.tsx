
import Link from 'next/link';
import React from 'react';
import { IoMdMailUnread } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="  bg-gray-500 flex flex-col-reverse text-white p-2 text-center text-xl relative bottom-0 w-full h-30 ">
     <div className="mt-5"> <p>&copy; 2024 ERUM WARIS All rights reserved</p> 
     </div>  
   <div className="flex justify-center text-2xl sm:text-2xl md:text-3xl lg:text-4xl  gap-8 ">
    <Link href="mailto:erumwaris93@gmail.com"  target="_blank" rel="noopener noreferrer" className="hover:text-blue-200"> <IoMdMailUnread /> </Link>
    <Link href="https://www.linkedin.com/in/erum-waris-16008b282/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-300"> <FaLinkedin /> </Link>
    <Link href="https://github.com/erum-waris" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-200" > <FaGithubSquare /> </Link>
   </div>
   
    </footer>
  );
};

export default Footer;
