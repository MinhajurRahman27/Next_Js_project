import Image from "next/image";
import React from "react";

const Hero = () => {

  
  return (
    <div className="flex flex-col-reverse lg:flex-row relative items-center md:justify-around gap-10 pt-30 md:pt-54 mb-30">
     
      <div className=" md:w-[600px]">
        <div className=" text-center md:text-left text-7xl  text-indigo-500 ">
      AK 47
      </div>
     <p className="text-gray-500 text-center md:text-left p-2 md:p-0  font-light ">
      The AK-47, designed by Mikhail Kalashnikov in 1947, became one of the most widely recognized firearms in history. Its designation stands for 'Avtomat Kalashnikova 1947'. The rifle was designed for reliability in harsh conditions, featuring a simple gas-operated mechanism with a rotating bolt. Its robust construction allows it to function in extreme temperatures, mud, sand, and with minimal maintenance. 
     </p>
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
          
        hidden lg:flex 
          
          border-white/50
          animate-spin-slow
        ">
        </div>

      </div>
 
    </div>
  );
};

export default Hero;
