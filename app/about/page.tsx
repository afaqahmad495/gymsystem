import React from 'react'
import Link from 'next/link'
import { Button } from '@mui/material';

const page = () => {
  return (
    <div className='min-h-screen font-sans '>
      <main className='min-h-screen w-full'>

          <div className="heading w-full py-0 px-4 bg-linear-to-r border-t border-zinc-500 bg-white font-sans text-white  shadow-md">
            <h1 className="text-center md:text-left text-2xl md:text-8xl font-extrabold text-blue-400 tracking-tight drop-shadow-lg">
             <span className="text-black">ABOUT</span> US
            </h1>
        </div>
          <div className="div1 grid grid-cols-1 md:grid-cols-3 gap-0 items-center py-0">
            
            <div className="md:col-span-1 md:order-1">
              <img
                src="https://images.unsplash.com/photo-1507398941214-572c25f4b1dc?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGd5bSUyMGJveXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500"
                alt="Gym Hero"
                className="w-full h-[300px] md:h-[400px] object-cover  shadow-lg"
              />
            </div>

            <div className="md:col-span-2 h-full bg-blue-400 text-black flex flex-col border border-zinc-500 justify-between p-4">
              <h2 className="text-2xl md:text-4xl font-bold">
                TAP INTO YOUR PRIMAL POWER. FORGE A STRONGER YOU.
              </h2>
              <div>
                <h4 className='font-bold'>OUR VISION </h4>
                <p className="text-zinc-800">
                Train like an athlete with top-tier equipment and expert programming. Whether you're building muscle or breaking PRs, we help you push past limits.
              </p>
              </div>
              
              
            </div>
          </div>
        <div className="div2 grid grid-cols-1 md:grid-cols-3 gap-0 items-center py-0">
          {/* Image: occupies 2 columns on md+ */}
          <div className="md:col-span-2 ">
            <img
              src="https://images.unsplash.com/photo-1686230399946-8cfdb71f4f07?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1hbiUyMGd5bXxlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500"
              alt="Gym Hero"
              className="w-full h-[300px] md:h-[400px] object-cover  shadow-lg"
            />
          </div>

          {/* Content: occupies 1 column on md+ */}
          <div className="md:col-span-1 h-full bg-zinc-200 text-black flex flex-col border border-zinc-500 justify-between p-4">
            <h2 className="text-2xl md:text-4xl font-bold">
              FOR THE COMMITTED
            </h2>
            <div>
                <h4 className='font-bold'>OUR VISION </h4>
                <p className="text-zinc-800">
                Train like an athlete with top-tier equipment and expert programming. Whether you're building muscle or breaking PRs, we help you push past limits.
              </p>
              </div>
            
          </div>
        </div>
         <div className='div3 w-full relative  '>
          <div className='absolute bottom-6  transform   bg-opacity-80 p-4  max-w-[22em]    '>
            <p className='font-bold text-xl '>WE'VE CREATED A SPACE WHERE YOU CAN RECONNECT WITH YOUR PRIMAL SELF.</p>
          </div>
          <img src="https://images.unsplash.com/photo-1574680096145-d05b474e2155?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGZpdG5lc3N8ZW58MHwwfDB8fHww&auto=format&fit=crop&q=60&w=500"
           alt=""
           className='object-center  w-full h-[80vh]   ' />
         </div>
         <div className="flex flex-col items-center justify-center gap-4 bg-zinc-200 w-full h-[80vh] ">
                     <p className=" text-black">
                       WHAT WE BELIVE IN
                     </p>
                     <h1 className="text-xl md:text-3xl font-extrabold text-center text-black tracking-tight drop-shadow-lg">
                        JOIN THE PRIMAL TRIBE TODAY!
                    </h1>
                     <Link href="/reserve" className="text-gray-700 hover:text-gray-900 dark:text-gray-300">
                           
                           <Button className="" variant="contained" > Reserve Your Spot</Button>
                         
                           
                     </Link>
                   
                   </div>
       
      </main>
      
    </div>
  )
}

export default page
