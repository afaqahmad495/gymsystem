import { Button } from "@mui/material";

import Link from "next/link";


export default function Home() {

 
  return (
    <div className=" min-h-screen bg-zinc-50 font-sans dark:bg-black">
      <main className="min-h-screen w-full">
         <div className="heading w-full py-4 px-3 bg-linear-to-r bg-white font-sans text-white  shadow-md">
           <h1 className="text-center md:text-left text-2xl md:text-8xl font-extrabold text-blue-400 tracking-tight drop-shadow-lg">
           <span className="text-black">TRAIN HARD.</span> LIVE BETTER
          </h1>
         </div>
        
        <div className="div1 flex flex-col md:flex-row">
          <div className="w-full ">
            <img
              src="https://images.unsplash.com/photo-1745851211804-409acbb4b597?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzV8fGd5bSUyMGJveXxlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500"
              alt="Gym Hero"
             className="object-center shadow-lg md:w-full h-[400px] "
            />
          </div>
          <div className="md:w-1/2 bg-zinc-200 text-black flex flex-col border border-zinc-500 justify-between p-4 ">
            <h2 className="text-2xl md:text-4xl font-bold ">
              FOR THR COMMITTED
            </h2>
            <p className="text-zinc-800">
              Train like an athlete with top-tier equipment and expert programming. Whether you're building muscle or breaking PRs, we help you push past limits.
            </p>
            <Link href="/about" className="my-6 md:mb-6">about us</Link>
          </div>
        </div>

        <div className="div2 grid grid-cols-1 md:grid-cols-3 text-black">
          <div className="order-2 md:order-1 flex flex-col justify-between border border-zinc-500 bg-zinc-200 p-4">
            <h3 className="text-center md:text-left text-3xl font-semibold text-black">
              GUIDED BY EXPERTS
            </h3>
            <p className="text-center md:text-left md:py-14 text-zinc-800">We believe in creating a positive environment where you can thrive. We're here to help you achieve your goals and unlock your full potential.
            </p>
          </div>

          <div className="order-3 md:order-2 flex flex-col justify-between border border-zinc-500 bg-zinc-200 p-4">
            <h3 className="text-center md:text-left text-3xl font-semibold text-black">
              DYNAMIC OPEN GYM
            </h3>
            <p className="text-center md:text-left md:py-8 text-zinc-800">
              Our facility is the optimal environment for strength training and performance, fully equipped with top-of-the-line tools, ample training areas, and a focus on functional movement.
            </p>
          </div>
          <div className="order-1 md:order-3 bg-yellow-300">
            <img
              src="https://images.unsplash.com/photo-1548690312-e3b507d8c110?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d29tYW4lMjBneW18ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500"
              alt="Gym Equipment"
              className="object-cover shadow-lg w-full md:w-[400px] lg:w-full  h-[400px]"
              height={400}
              width={400}
            />
          </div>
        </div>
        <div className="heading w-full py-4 px-3 bg-linear-to-r bg-white font-sans text-white  shadow-md">
          <h1 className="text-center md:text-left text-2xl md:text-8xl font-extrabold text-blue-400 tracking-tight drop-shadow-lg">
      <span className="text-black">JOIN THE</span> COMUNITY
    </h1>
        </div>

        <div className="flex flex-col md:flex-row-reverse items-stretch  border border-zinc-500 text-black">
          
          <div className="w-full md:w-[70%] lg:w-[70%]">
            <img
              src="https://images.unsplash.com/photo-1584863231364-2edc166de576?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8d29tYW4lMjBneW18ZW58MHwwfDB8fHww&auto=format&fit=crop&q=60&w=500"
              alt="Gym Hero"
              className="object-cover w-full  md:h-auto md:min-h-[70%] lg:h-[400px] shadow-lg"
              
            />
          </div>

          
          <div className="w-full md:w-[30%]  bg-zinc-200  p-4 flex flex-col justify-center gap-2 md:gap-3 lg:gap-6  ">
            <h2 className="text-xl md:text-2xl lg:text-4xl font-bold text-black">
              DISCOVER YOUR POTENTIAL
            </h2>
              <hr className="text-zinc-500" />
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold">EXPERT COACHING</h4>
                <p className="text-sm text-gray-800">Trainers who are passionate about your progress.</p>
                <hr className="text-zinc-500" />
              </div>

              <div>
          <h4 className="font-semibold">RESULTS-DRIVEN PROGRAMS</h4>
          <p className="text-sm text-gray-800">Workouts that deliver tangible, measurable results.</p>
          <hr className="text-zinc-500" />
              </div>

              <div>
          <h4 className="font-semibold">A SUPPORTIVE TRIBE</h4>
          <p className="text-sm text-gray-800">Community support to keep you consistent and motivated.</p>
             <hr className="text-zinc-500" />
              </div>
            </div>
          </div>
        </div>
        
        
          <div className="flex flex-col items-center justify-center gap-4 bg-blue-400 w-full h-[80vh] ">
            <p className=" text-black">
              WHAT WE BELIVE IN
            </p>
            <h1 className="text-xl md:text-3xl font-extrabold text-center text-black tracking-tight drop-shadow-lg">
               JOIN THE PRIMAL TRIBE TODAY!
           </h1>
            <Link href="/reserve" className="text-gray-700 hover:text-gray-900 dark:text-gray-300">
                  
                  <Button  variant="contained"  > <span className='font-semibold'>Reserve Your Spot</span></Button>
                
                  
            </Link>
          
          </div>
      </main>
    </div>
  );
}
