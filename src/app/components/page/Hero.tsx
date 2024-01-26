import Image from "next/image";
import React from "react";

function Hero() {
  return (
    <div className="px-40 relative">
      <div className="absolute top-3 left-0 w-full h-full z-[1] bg-black/50"></div>
      <Image
        src="/gambar/room2.jpeg"
        width={600}
        height={200}
        // layout="fill"
        objectFit="cover"
        alt="room"
        className="w-full rounded-[20px] "
      ></Image>
    </div>
  );
}

export default Hero;
