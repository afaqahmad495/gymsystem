"use client";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

function NextArrow({ onClick }: any) {
  return (
    <div
      className="overflow-hidden absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer bg-black hover:bg-indigo-400 text-white p-3 rounded-full z-10 text-2xl hover:opacity-100 opacity-40 transition-all duration-300 ease-in-out "
      onClick={onClick}
    >
      <FaArrowRight />
    </div>
  );
}

function PrevArrow({ onClick }: any) {
  return (
    <div
      className="overflow-hidden absolute left-2 top-1/2 -translate-y-1/2 cursor-pointer bg-black hover:bg-indigo-400 text-white p-3 rounded-full z-10 text-2xl hover:opacity-100 opacity-40 transition-all duration-300 ease-in-out "
      onClick={onClick}
    >
      <FaArrowLeft />
    </div>
  );
}


export default function ImageSlider() {
  const settings: any = {
    
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    
  };

  return (
    <div className=" overflow-hidden  ">
      <Slider {...settings}>
        <img className="object-cover shadow-lg w-full h-[225px] md:h-[324px] lg:h-[480px] xl-h-[580px]" src="/images/meghan-holmes-wy_L8W0zcpI-unsplash-min.jpg" alt="Slide 1" />
        <img className="object-cover shadow-lg w-full h-[225px] md:h-[324px] lg:h-[480px] xl-h-[580px]" src="/images/Reconnect section.jpg" alt="Slide 2" />
        <img className="object-cover shadow-lg w-full h-[225px] md:h-[324px] lg:h-[480px] xl-h-[580px]" src="/images/Image.jpg" alt="Slide 3" />
      </Slider>
    </div>
  );
}


