import Image from "next/image";
import React from "react";

function Hero() {
  return (
    <div className="relative">
      <div className="absolute top-{11px} left-0 w-full h-full z-[1] bg-black/50">
        <div className="text-6xl justify-between text-center">
          <h3>Design Your Home</h3>
          <h3>with the Expert</h3>
        </div>
      </div>
      <Image
        src="/gambar/room2.jpeg"
        width={800}
        height={200}
        // layout="fill"
        objectFit="cover"
        alt="room"
        className="w-full h-full"
      ></Image>
    </div>
  );
}

export default Hero;
