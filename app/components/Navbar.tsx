"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDumbbell, faHeart } from "@fortawesome/free-solid-svg-icons";

import Icon from '@mui/material/Icon';

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full text-black bg-[#E9ECFF] dark:border-gray-800">
      <div className="mx-auto  px-4 sm:px-6 md:px-4">
        <div className="flex h-16 items-center justify-between">
          
          <div className="flex items-center justify-center gap-1 ">
            <img src="/images/logo.svg" alt="Logo" className="h-8" />
            
            <Link href="/" className="text-xl font-semibold text-gray-900 font-sans">
              GymSystem
            </Link>
          </div>

          <div className="hidden md:flex md:items-center md:space-x-8 font-sans">
            <Link href="/" className="text-gray-700 hover:text-gray-900">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-gray-900">
              About
            </Link>
            <Link href="/reserve" className="  ">
              <Button variant="contained" className="bg-indigo-400! text-black!" >Reserve Your Spot</Button>
            </Link>
          </div>

          <div className="md:hidden flex items-center justify-center ">
            <button
              onClick={() => setOpen((s) => !s)}
              aria-expanded={open}
              aria-label="Toggle menu"
              className=" rounded-md text-gray-700  "
            >
              {!open ? (
                <div className="flex items-center justify-center pb-5 ml-2"> 
                 <Icon fontSize="large" >+</Icon>
                </div>
                
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="md:hidden px-2 pb-4 space-y-1 ">
          <Link href="/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-red-100 dark:text-gray-800">
            Home
          </Link>
          <Link href="/about" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-400 dark:text-gray-800">
            About
          </Link>
          <Link href="/reserve" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-400 dark:text-gray-800">
            Reserve Your Spot
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
