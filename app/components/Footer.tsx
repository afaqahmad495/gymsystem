"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDumbbell, faHeart } from "@fortawesome/free-solid-svg-icons";

const Footer: React.FC = () => {
  return (
    <footer className="overflow-hidden w-full bg-[#E9ECFF] text-black  md:h-[480px]  border-t border-gray-800">
    <div className="w-full h-full px-4 flex flex-col justify-between py-8  ">
      
      <div className="overflow-hidden flex flex-col  md:flex-row  md:justify-between gap-6 ">
        <div><img className="h-[140px] " src="/images/gymlogo.svg" alt="Logo"  /></div>
        
        <p className="text-6xl md:text-5xl font-semibold">GymSystem</p>
      </div>
      <div className="flex flex-col md:flex-row md:justify-between md:items-center space-y-6 mt-4 ">
        <div className="font-bold">
          <h3 className="text-lg font-bold">CONTACT</h3>
          <p>Email: info@gymsystem.com</p>
          <p>Phone: (123) 456-7890</p>
          <p>Email: info@gymsystem.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
        <div className="font-bold">
          <h3 className="text-lg font-bold">OPENING HOURS</h3>
          <p>Mon-Fri: 6 AM - 10 PM</p>
          <p>Sat-Sun:<span className="ml-18">8 AM - 8 PM</span></p>
          <p>Mon-Fri:<span className="ml-18">6 AM - 10 PM</span>     </p>
          <p>Sat-Sun:<span className="ml-18">8 AM - 8 PM</span>      </p>
        </div>
        <div className="font-bold underline ">
          <h3 className="text-lg font-bold">SOCIAL</h3>
          <p>Facebook: /gymsystem</p>
          <p>Instagram: @gymsystem</p>
          <p>Facebook: /gymsystem</p>
          <p>Instagram: @gymsystem</p>
        </div>
      </div>
      
    </div>
    </footer>
  );
};

export default Footer;