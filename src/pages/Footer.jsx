import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-[#862949] px-4 py-8  md:px-16 lg:px-28' style={{ backgroundColor: "#862949" }}
    >
      <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
        <div>
          <h2 className='text-lg text-white font-bold mb-4'> About Us</h2>
          <p className='text-white'>We are a team dedicated to providing the best products and servies to our customers.</p>
        </div>
        <div>
          <h2 className='text-lg text-white font-bold mb-4'> Quick Links</h2>
          <ul>
            <li><a href='' className='hover:underline text-gray-300'>Home</a></li>
            <li><a href='' className='hover:underline text-gray-300'>Services</a></li>
            <li><a href='' className='hover:underline text-gray-300'>Contact</a></li>
            <li><a href='' className='hover:underline text-gray-300'>About</a></li>
          </ul>
        </div>
        <div>
          <h2 className='text-lg text-white font-bold mb-4'> Follow Us</h2>
          <ul className='flex space-x-4'>
            <li>{" "} <FaFacebook className="text-blue-500" /> {" "}<a href='' className='hover:underline text-gray-300'>Facebook</a></li>
            <li><FaTwitter className="text-sky-500" /><a href='' className='hover:underline text-gray-300'>Twitter</a></li>
            <li>
              <FaInstagram className="text-orange-500" />
              <a href='' className='hover:underline text-gray-300'>Contact</a></li>
          </ul>
        </div>
      </div>
      <div className='border-t border-white-600 text-white  p-4 pt-6 text-center'>
        <p>2024 Code With Yoursaf. All Rights Reserved.</p>
      </div>
    </footer>
  )
}

export default Footer