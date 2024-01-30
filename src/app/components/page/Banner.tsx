"use client";
import Image from "next/image";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function Banner() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <Carousel
      swipeable={false}
      draggable={false}
      showDots={true}
      responsive={responsive}
      ssr={true}
      infinite={true}
      autoPlaySpeed={3000} // Increase this for slower transitions
      keyBoardControl={true}
      transitionDuration={1000} // Increase this for a slower transition
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      dotListClass="custom-dot-list-style"
      itemClass="p-1 pb-8"
    >
      <Image
        src={"/gambar/iklan1.png"}
        width={365}
        height={231}
        alt="iklan1.png"
      />
      <Image
        src={"/gambar/iklan2.png"}
        width={365}
        height={231}
        alt="iklan2.png"
      />
      <Image
        src={"/gambar/iklan3.png"}
        width={365}
        height={231}
        alt="iklan3.png"
      />
      <Image
        src={"/gambar/iklan2.png"}
        width={365}
        height={231}
        alt="iklan2.png"
      />
      {/* Add more div blocks for additional slides */}
    </Carousel>
  );
}

export default Banner;
