"use client";
import React from 'react'
import Link from 'next/link';


const Card: React.FC  = () => {
  return (
    <div className=' h-min-screen bg-white text-black p-8'>
      
        <div className="flex flex-col justify-between  border rounded-2xl h-auto md:h-70 xl:h-80 border-zinc-400 ">
            <div className='relative card-header realtive flex  rounded-t-2xl bg-zinc-100 border-b border-zinc-400 h-24 md:h-10'>
                
                <div className='absolute top-4 left-4 md:-top-4.5 md:left-6 h-18 w-18'>
                    <img className=' object-cover rounded w-full h-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe6JGkMJvI1Pw5Mh6nGRjw5pMHsiVyBLQYTw&s"  alt="product image" />
                </div>
                <div className='flex justify-between w-full px-4 items-center'>
                    <div className='ml-24'>
                        <p>
                            Variation Type : Black
                        </p>
                    </div>
                    <div className=' flex gap-3 md:gap-6'>
                        <p className='text-md'>Retail Price: $99</p>
                        <p className='text-md'>|</p>
                        <p className='text-md'>Stock:999</p>
                    </div>
                </div>
                
            </div>
            <div className='card-inputs flex sm:flex-col md:flex-row p-4 md:mt-10 md:items-center justify-between '>
            <div className='flex flex-col md:flex-row md:items-center gap-3 md:gap-6 xl:gap-8'>
                <div className='flex flex-col'>
                <label className='text-sm md:text-md xl:text-lg' htmlFor="">Tier 1</label>
                <input type="text" className='h-8 w-20 md:h-10 md:w-26 xl:h-12 xl:w-32 border border-zinc-400 rounded' />
                </div>
                <p className='mt-6 xl:text-xl'>To</p>
                <div className='mt-3 md:mt-5 xl:mt-6.5'>
                <input type="text" className='h-8 w-20 md:h-10 md:w-26 xl:h-12 xl:w-32 border border-zinc-400 rounded' />
                </div>
                
                <p className='mt-6'>|</p>
                
                <div className='flex flex-col'>
                <label className='text-sm md:text-md xl:text-lg' htmlFor="">Unit Price:</label>
                <input type="text" className='h-8 w-20 md:h-10 md:w-26 xl:h-12 xl:w-32 border border-zinc-400 rounded' />

                </div>
                <div className='flex flex-col'>
                <label className='text-sm md:text-md xl:text-lg' htmlFor="">Shipping</label>
                <input type="text" className='h-8 w-20 md:h-10 md:w-26 xl:h-12 xl:w-32 border border-zinc-400 rounded' />

                </div>
            </div> 
            <div className=' md:mt-8'>
                <Link href="" className='text-red-400' >Remove</Link>
            </div>
            
            </div> 
           <div className='card-footer flex justify-end items-center rounded-b-2xl bg-zinc-200 h-16 md:mt-12 border-t px-4 border-zinc-400 '>
            <div className='flex items-center justify-center gap-1'>
                <p className='font-bold text-2xl text-green-600'>+ </p>
                <button className='text-green-600 text-sm float-right '>Add Another Tier</button>
            </div>
        </div> 
        </div>
        
      
    </div>
  )
}

export default Card
