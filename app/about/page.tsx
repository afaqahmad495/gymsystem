<div className="md:col-span-1 h-full bg-[#E9ECFF] text-black flex flex-col border border-zinc-500 justify-between p-4"></div>
import Link from 'next/link'
import { Button } from '@mui/material';

const page = () => {
  return (
    <div className='min-h-screen '>
      <main className='min-h-screen w-full'>

          <div className="heading w-full py-4 px-4 bg-linear-to-r border-t border-zinc-500 bg-white font-sans text-white  shadow-md">
            <h1 className=" md:text-left text-2xl md:text-5xl lg:text-7xl font-extrabold text-black  drop-shadow-lg">
             ABOUT US
            </h1>
        </div>
          <div className="div1 overflow-hidden grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 items-center py-0">
            
            <div className="md:col-span-1 md:order-1">
              <img
                src="/images/image.jpg"
                alt="Gym Hero"
                className="w-full h-[225px] md:h-[375px] lg:h-[480px] xl:h-[580px] object-cover  shadow-lg"
              />
            </div>

            <div className=" lg:col-span-2 h-full bg-indigo-400 text-black flex flex-col border border-zinc-500 justify-between p-4">
              <h2 className="text-2xl md:text-4xl font-bold lg:w-[600px]">
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
        <div className="div2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 items-center py-0">
          {/* Image: occupies 2 columns on md+ */}
          <div className="lg:col-span-2 ">
            <img
              src="/images/about2.jpg"
              alt="Gym Hero"
              className="w-full h-[225px] md:h-[375px] lg:h-[480px] xl:h-[580px] object-cover  shadow-lg"
            />
          </div>

          {/* Content: occupies 1 column on md+ */}
          <div className="md:col-span-1 h-full bg-[#E9ECFF] text-black flex flex-col border border-zinc-500 justify-between p-4">
            <h2 className="text-2xl md:text-4xl font-bold">
              DYNAMIC OPEN GYM
            </h2>
            <div>
                <h4 className='font-bold'>OUR VISION </h4>
                <p className="text-zinc-800">
                Train like an athlete with top-tier equipment and expert programming. Whether you're building muscle or breaking PRs, we help you push past limits.
              </p>
              </div>
            
          </div>
        </div>
        <div className="div3 w-full relative">
          <div className="absolute  bottom-2  md:bottom-6 z-10  bg-opacity-80 p-4 w-[70%] md:w-1/2 rounded">
            <p className="font-bold text-lg md:text-2xl lg:text-4xl">WE'VE CREATED A SPACE WHERE YOU CAN RECONNECT WITH YOUR PRIMAL SELF.</p>
          </div>
          {/*image for mobail   */}
          <div className="block md:hidden h-[480px]" >
           <img src="/images/Reconnect section.jpg"
           alt="Reconnect section for mobail"
           className='object-cover  w-full h-full' /></div>
           
          <img src="/images/Reconnect section.jpg"
           alt="Reconnect section for desktop"
           className='hidden md:block object-center  w-full  md:h-[325px] lg:h-[480px] xl:h-[580px]' />
         
         </div>
         <div className="flex flex-col items-center justify-center gap-4 bg-indigo-400 w-full h-[425px] md:h-[480px] ">
                     <p className=" text-black">
                       WHAT WE BELIVE IN
                     </p>
                     <h1 className="text-xl md:text-3xl font-extrabold text-center text-black tracking-tight drop-shadow-lg">
                        JOIN THE PRIMAL TRIBE TODAY!
                    </h1>
                     <Link href="/reserve" >
                           
                           <Button  variant="contained" className="bg-[#E9ECFF]! text-black!"  > Reserve Your Spot</Button>
                     </Link>
                   
                   </div>
       
      </main>
      
    </div>
  )
}

export default page
