import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className="h-[80vh] w-full relative">
      <div className="h-full w-full">
        <video
          autoPlay
          loop
          className="w-full h-full object-cover relative top-0 left-0"
        >
          <source src="/tokyo-ghoul.1920x1080.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="w-full h-full absolute bg-[#111] bg-opacity-80 top-0 flex">
        <div className="flex-1 flex items-center pl-16">
          <h1 className="text-white text-5xl ">
            Anime Nexus: Cracking Open the{" "}
            <span className="text-red-600">Vault to Your </span>Animated
            Wonderland
          </h1>
        </div>
        <div className="flex-1 relative flex items-end justify-center">
          <Image
            fill
            className="p-24 pb-0 pt-16"
            src="/pngwing.com.png"
            alt="nezuko"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
