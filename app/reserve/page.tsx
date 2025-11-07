import React from 'react'
import { Button } from "@mui/material";

const page = () => {
  return (
    <div className=' '>
      <main className='  w-full'>
        <div className="heading w-full py-4 px-4 bg-linear-to-r border-t border-b border-zinc-400 bg-white font-sans text-white  shadow-md">
           <h1 className=" md:text-left text-2xl md:text-5xl lg:text-7xl font-extrabold text-indigo-400 tracking-tight drop-shadow-lg">
           <span className="text-black">BOOK A</span> SESSION
          </h1>
         </div>
         <div className='main-card-div grid grid-col-1 md:grid-cols-3 gap-6 md:gap-0 bg-[#E9ECFF] text-black'>
                <div className='card1 flex flex-col items-center justify-between gap-8 p-4 '>
                  <h1 className='text-2xl md:text-4xl font-bold'>STRENGTH</h1>
                  <div className='space-y-2'>
                    <p>Wednesday at 6AM</p>
                  <hr className='text-zinc-400' />
                  <p>Weekend and Holidays at 8AM</p>
                  <hr className='text-zinc-400' />
                  <p>Build a foundation of raw ppower with our comprehansive weightlifting and strength traning program  </p>
                  </div>
                  <div className='w-full '>
                    <Button href='/about' className='bg-indigo-400! w-full! text-black!' variant='contained'>RESERVE YOUR SPOT</Button>
                  </div>
                  
                </div>
                <hr className='text-zinc-400 md:hidden' />
                <div className='card2 flex flex-col items-center justify-between border-r border-l border-zinc-400 gap-8 p-4 '>
                  <h1 className='text-2xl md:text-4xl font-bold'>CONDITIONING</h1>
                  <div className='space-y-2 '>
                    <p>Wednesday at 6AM</p>
                  <hr className='text-zinc-400' />
                  <p>Weekend and Holidays at 8AM</p>
                  <hr className='text-zinc-400' />
                  <p>Build a foundation of raw ppower with our comprehansive weightlifting and strength traning program  </p>
                  </div>
                  <div className='w-full '>
                    <Button href='/about' className='bg-indigo-400! w-full! text-black!' variant='contained'>RESERVE YOUR SPOT</Button>
                  </div>
                  
                </div>
                <hr className='text-zinc-400 md:hidden' />
                <div className='card3 flex flex-col items-center justify-between gap-8 p-4 '>
                  <h1 className='text-2xl md:text-4xl font-bold'>COMMUNITY CLASSES</h1>
                  <div className='space-y-2'>
                  <p>Weekend and Holidays at 8AM</p>
                  <hr className='text-zinc-400' />
                  <p>Build a foundation of raw ppower with our comprehansive weightlifting and strength traning program  </p>
                  </div>
                  <div className='w-full '>
                    <Button href='/about' className='bg-indigo-400! w-full! text-black!' variant='contained'>RESERVE YOUR SPOT</Button>
                  </div>
                  <hr className='text-zinc-400 md:hidden' />
                </div>
                
                
                
         </div>
         <div className="flex flex-col items-center justify-center gap-4 bg-indigo-400 w-full h-[480px] ">
                    
                    <div className='flex flex-col items-center justify-center m-4 md:w-[660px] lg:w-[780px] gap-4'>
                      <h1 className="text-2xl md:text-4xl  lg:text-5xl  w-[50%] md:w-[70%] lg:w-full font-extrabold text-center text-black tracking-tight drop-shadow-lg">
                        PRIMAL PERSONAL TRAINING
                    </h1>
                     <p className=" text-center text-black">
                      Receive personalized guidance and tailored programs designed to unlock your individual primal potential. Our expert coaches will guide you every step of the way.
                     </p>
                     <div  className="text-gray-700 hover:text-gray-900 dark:text-gray-300">
                           
                           <Button className=" bg-[#E9ECFF]! text-black! " href="/reserve" variant="contained" > Reserve Your Spot</Button>
                         
                           
                     </div>
                    </div>
                     
                   
                   </div>
      </main>
    </div>
  )
}

export default page
