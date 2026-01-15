import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="flex justify-center pt-54 ">
      <div className="relative">
        
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
