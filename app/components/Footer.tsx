"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDumbbell, faHeart } from "@fortawesome/free-solid-svg-icons";

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-zinc-200 text-black  md:h-[40vh]  border-t border-gray-800">
    <div className="w-full mx-auto px-4 flex flex-col justify-between ">
      
      <div className="flex flex-col md:flex-row items-center justify-between  ">
        <FontAwesomeIcon className="text-8xl" icon={faDumbbell} />
        <p className="text-4xl font-semibold">GymSystem</p>
      </div>
      <div className="flex flex-col md:flex-row lg:justify-between lg:items-center space-y-4 md:space-y-0 md:mt-8 md:space-x-4">
        <div className="flex-1">
          <h3 className="text-lg font-semibold">Contact</h3>
          <p>Email: info@gymsystem.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold">Opening Hours</h3>
          <p>Mon-Fri: 6 AM - 10 PM</p>
          <p>Sat-Sun: 8 AM - 8 PM</p>
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold">Social</h3>
          <p>Facebook: /gymsystem</p>
          <p>Instagram: @gymsystem</p>
        </div>
      </div>
      
    </div>
    </footer>
  );
};

export default Footer;