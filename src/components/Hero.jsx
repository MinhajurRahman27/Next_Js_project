import Image from "next/image";
import React from "react";

const Hero = () => {

  
  return (
    <div className="flex relative justify-around gap-10 pt-54 ">
     
      <div className=" w-[600px]">
        <div className="  text-7xl  text-indigo-600 ">
      AK 47
      </div>
     <span className="text-gray-500 font-light">
      <span className="text-3xl font-semibold ">T</span>he AK-47, designed by Mikhail Kalashnikov in 1947, became one of the most widely recognized firearms in history. Its designation stands for 'Avtomat Kalashnikova 1947'. The rifle was designed for reliability in harsh conditions, featuring a simple gas-operated mechanism with a rotating bolt. Its robust construction allows it to function in extreme temperatures, mud, sand, and with minimal maintenance. 
     </span>
      </div>
      <div className="relative border-amber-200">
        
        {/* Image Card */}
        <div className=" rounded-2xl  relative z-10 ">
          <Image
            width={400}
            height={400}
            src="/ak.png"
            alt="Gun image"
          />
        </div>

        {/* Circle behind image */}
        <div className="
          absolute
          top-1/2 left-1/2
          -translate-x-1/2 -translate-y-1/2
          w-[450px] h-[450px]
          rounded-full
          shadow-indigo-500
          shadow-lg
          
       
          
          border-white/50
          animate-spin-slow
        ">
        </div>

      </div>
 
    </div>
  );
};

export default Hero;
