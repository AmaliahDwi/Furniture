import React from "react";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import Image from "next/image";

function Footer({ fullscreen }: any) {
  return (
    <div className="py-5 bg-gray-100 rounded-t-[30px] border-t border-lg border-gray-200">
      <div className="grid grid-cols-3 gap-4 justify-items-center">
        <div className="flex-row w-72 mb-6">
          <div className="text-gray-500 text-lg font-medium text-center mb-4">
            Metode Pembayaran
          </div>
          <div className="grid grid-cols-3 gap-2 justify-items-center items-center">
            <Image
              src={"/gambar/visa.png"}
              width={30}
              height={15}
              alt="lamp"
              className="text-center"
            ></Image>
            <Image
              src={"/gambar/mastercard.png"}
              width={30}
              height={15}
              alt="lamp"
            ></Image>
            <Image
              src={"/gambar/atm bersama.png"}
              width={30}
              height={15}
              alt="lamp"
            ></Image>
            <Image
              src={"/gambar/bank transfer.png"}
              width={40}
              height={20}
              alt="lamp"
            ></Image>
            <Image
              src={"/gambar/dana.png"}
              width={50}
              height={25}
              alt="lamp"
            ></Image>
            <Image
              src={"/gambar/jcb.png"}
              width={30}
              height={15}
              alt="lamp"
            ></Image>
            <Image
              src={"/gambar/ovo.png"}
              width={50}
              height={25}
              alt="lamp"
            ></Image>
          </div>
        </div>
        <div className="flex-row w-72 mb-6">
          <div className="text-gray-500 text-lg font-medium text-center mb-4">
            Jasa Pengiriman
          </div>
          <div className="grid grid-cols-3 gap-2 justify-items-center items-center">
            <Image
              src={"/gambar/jne.png"}
              width={45}
              height={23}
              alt="lamp"
              className="text-center"
            ></Image>
            <Image
              src={"/gambar/jnt.png"}
              width={60}
              height={30}
              alt="lamp"
            ></Image>
            <Image
              src={"/gambar/lion.png"}
              width={70}
              height={35}
              alt="lamp"
            ></Image>
            <Image
              src={"/gambar/pos.png"}
              width={50}
              height={25}
              alt="lamp"
            ></Image>
            <Image
              src={"/gambar/sicepat.png"}
              width={70}
              height={35}
              alt="lamp"
            ></Image>
            <Image
              src={"/gambar/tiki.png"}
              width={60}
              height={30}
              alt="lamp"
            ></Image>
          </div>
        </div>
        <div className="flex-row w-72 mb-6">
          <div className="text-gray-500 text-lg font-medium text-center mb-4">
            Metode Pembayaran
          </div>
          <div className="grid grid-cols-3 gap-2 justify-items-center items-center">
            <Image
              src={"/gambar/visa.png"}
              width={30}
              height={15}
              alt="lamp"
              className="text-center"
            ></Image>
            <Image
              src={"/gambar/mastercard.png"}
              width={30}
              height={15}
              alt="lamp"
            ></Image>
            <Image
              src={"/gambar/atm bersama.png"}
              width={30}
              height={15}
              alt="lamp"
            ></Image>
            <Image
              src={"/gambar/bank transfer.png"}
              width={40}
              height={20}
              alt="lamp"
            ></Image>
            <Image
              src={"/gambar/dana.png"}
              width={50}
              height={25}
              alt="lamp"
            ></Image>
            <Image
              src={"/gambar/jcb.png"}
              width={30}
              height={15}
              alt="lamp"
            ></Image>
            <Image
              src={"/gambar/ovo.png"}
              width={50}
              height={25}
              alt="lamp"
            ></Image>
          </div>
        </div>
      </div>

      <div className="lg:text-2xl text-xl text-center text-amber-950">
        Find us in social media
      </div>
      <div className="flex gap-4 justify-center p-4">
        <AiFillInstagram className="w-6 h-6  text-amber-950" />
        <FaFacebookF className="w-6 h-6 text-amber-950" />
        <FaTwitter className="w-6 h-6 text-amber-950" />
      </div>
      <div className="text-gray-700 text-center sm:text-sm lg:text-base">
        &copy; 2024 Abani Furniture all rights reserved
      </div>
    </div>
  );
}

export default Footer;
