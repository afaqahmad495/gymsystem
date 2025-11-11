"use client";
import { Button } from "@mui/material";
import Slider from "./components/Slider";

import Link from "next/link";


export default function Home() {
    
 
  return (
    <div className="overflow-hidden
     min-h-screen bg-zinc-50 font-sans dark:bg-black">
      <main className="min-h-screen w-full">
         <div className="heading flex items-center justify-center w-full py-4 px-3 bg-linear-to-r bg-white font-sans text-white  shadow-md">
           <h1 className="  text-4xl md:text-6xl lg:text-8xl xl:text-10xl font-extrabold text-indigo-400 tracking-tight drop-shadow-lg">
           <span className="text-black">TRAIN HARD.</span>LIVE BETTER
          </h1>
         </div>
        
        <div className="div1 overflow-hidden grid grid-cols-1 md:grid-cols-3 md:flex-row">
          <div className="col-span-2 ">
            <Slider />
            
          </div>
          <div className=" bg-[#E9ECFF] text-black flex flex-col border border-zinc-500 justify-between p-4 ">
            <h2 className="text-2xl md:text-4xl font-bold ">
              FOR THR COMMITTED
            </h2>
            <p className="text-zinc-800">
              Train like an athlete with top-tier equipment and expert programming. Whether you're building muscle or breaking PRs, we help you push past limits.
            </p>
            <Link href="/about" className=" md:mb-10 ml-8">ABOUT US</Link>
          </div>
        </div>

        <div className="div2 grid grid-cols-1 md:grid-cols-3 text-black">
          <div className="order-2 md:order-1 flex flex-col justify-between border border-zinc-500 bg-[#E9ECFF] p-4">
            <h3 className="md:text-left  text-3xl font-semibold text-black">
              GUIDED BY EXPERTS
            </h3>
            <div className="flex justify-center ">
               <p className=" md:text-left lg:mb-18 text-zinc-800">We believe in creating a positive environment where you can thrive. We're here to help you achieve your goals and unlock your full potential.
            </p></div>
            
          </div>

          <div className="order-3 md:order-2 flex flex-col justify-between border-b border-zinc-500 bg-[#E9ECFF] p-4">
            <h3 className=" md:text-left text-3xl font-extrabold overflow-hidden text-black">
              DYNAMIC OPEN GYM
            </h3>
            <div className="flex justify-center ">
              <p className=" md:text-left md:pb-6 lg:mb-6 text-zinc-800">
              Our facility is the optimal environment for strength training and performance, fully equipped with top-of-the-line tools, ample training areas, and a focus on functional movement.
            </p>
            </div>
            
          </div>
          <div className="order-1 md:order-3 bg-yellow-300">
            <img
              src="https://images.unsplash.com/photo-1548690312-e3b507d8c110?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d29tYW4lMjBneW18ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500"
              alt="Gym Equipment"
              className="object-cover shadow-lg w-full h-[479px] md:h-[340px] lg:h-[479px]"
              
            />
          </div>
        </div>
        <div className="heading w-full py-4 px-3 bg-linear-to-r bg-white font-sans text-white  shadow-md">
          <h1 className="text-center md:text-left text-4xl md:text-7xl lg:text-8xl xl:text-10xl font-extrabold text-indigo-400 tracking-tight drop-shadow-lg">
      <span className="text-black">JOIN THE</span> COMUNITY
    </h1>
        </div>

        <div className="div3 flex flex-col  md:flex-row-reverse items-stretch  border border-zinc-500 text-black">
          
          <div className="md:w-[50%] lg:w-full">
            <img
              src="/images/home3.jpg"
              alt="Gym Hero"
              className="object-cover w-full h-[225px] md:h-[488] lg:h-[600px] xl:h-[700px] shadow-lg"
              
            />
          </div>
          <div className="w-full md:w-[50%] lg:w-[40%]  bg-[#E9ECFF]   flex flex-col justify-center gap-2 md:gap-3 lg:gap-6  ">
            <h2 className=" text-xl md:text-4xl lg:text-4xl xl:text-5xl font-bold text-black p-4">
              DISCOVER YOUR POTENTIAL
            </h2>
              <hr className="text-zinc-500" />
            <div className="space-y-4">
              <div className="px-4">
                <h4 className="font-bold">EXPERT COACHING</h4>
                <p className="text-sm text-gray-800">Trainers who are passionate about your progress.</p>
                
              </div>
              <hr className="text-zinc-500" />
              <div className="px-4">
          <h4 className="font-bold">RESULTS-DRIVEN PROGRAMS</h4>
          <p className="text-sm text-gray-800">Workouts that deliver tangible, measurable results.</p>
          
              </div>
            <hr className="text-zinc-500" />
              <div className="px-4">
          <h4 className="font-bold">A SUPPORTIVE TRIBE</h4>
          <p className="text-sm text-gray-800">Community support to keep you consistent and motivated.</p>
             
              </div>
              <hr className="text-zinc-500" />
              <div className="overflow-hidden mt-4 md:mt-10 ">
                <p className="p-4 ">VIEW CLASSES</p>
              </div>
            </div>
          </div>
        </div>
        
        
          <div className="flex flex-col items-center justify-center gap-4 bg-indigo-400 w-full h-[425px] md:h-[480px] ">
           
            <p className=" text-black">
              WHAT WE BELIVE IN
            </p>
            <h1 className="text-2xl md:text-4xl  lg:text-5xl  w-[50%] md:w-[70%] lg:w-full font-extrabold text-center text-black  drop-shadow-lg">
               JOIN THE PRIMAL TRIBE TODAY!
           </h1>
            <Link href="/reserve" >
                  
                  <Button  variant="contained" className="bg-[#E9ECFF]! text-black!"  > Reserve Your Spot</Button>
            </Link>
           
            
          
          </div>
      </main>
    </div>
  );
}
