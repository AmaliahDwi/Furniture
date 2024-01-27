"use client";
import Image from "next/image";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function Hero() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="relative">
      <div className="absolute top-{5px} left-0 w-full h-full z-[1] bg-black/50">
        <div className="grid grid-cols-1 place-items-center w-full h-full">
          <div className="text-6xl font-bold text-gray-100 whitespace-pre">
            <div className="mb-5">Design Your Home</div>
            <div> with the Expert</div>
          </div>
        </div>
      </div>
      <Carousel
        swipeable={false}
        draggable={false}
        showDots={true}
        responsive={responsive}
        ssr={true}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000} // Increase this for slower transitions
        keyBoardControl={true}
        transitionDuration={1000} // Increase this for a slower transition
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="p-1"
      >
        <Image
          src="/gambar/room2.jpeg"
          width={800}
          height={300}
          objectFit="cover"
          alt="room"
          className="w-full h-[655px] -mt-1"
        ></Image>
        <Image
          src={"/gambar/iklan1.png"}
          width={800}
          height={300}
          objectFit="cover"
          alt="room"
          className="w-full h-[655px] -mt-1"
        />
        <Image
          src={"/gambar/iklan2.png"}
          width={800}
          height={300}
          objectFit="cover"
          alt="room"
          className="w-full h-[655px] -mt-1"
        />
        <Image
          src={"/gambar/iklan3.png"}
          width={800}
          height={300}
          objectFit="cover"
          alt="room"
          className="w-full h-[655px] -mt-1"
        />
      </Carousel>
    </div>
  );
}

export default Hero;
