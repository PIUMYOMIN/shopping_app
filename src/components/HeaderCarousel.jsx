import React from "react";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import banner from "../asset/banner.png";
import banner2 from "../asset/banner2.png";
import banner3 from "../asset/banner3.png";
import bluetooth from "../asset/bluetooth.png";
import airpods from "../asset/AirPods 3.jpg";
import headphone from "../asset/headphone.png";
import smartwatch from "../asset/smart_watch.png";
import gamingphone from "../asset/gaming_ear_phone.png";
import gamingmouse from "../asset/gaming_mouse.png";
import tripod from "../asset/metal_phone_tripod.png";
import keyboard from "../asset/bluetooth_keyboard.png";
import { Link } from "react-router-dom";
export default function HeaderCarousel() {
  return <div className="w-full lg:py-4">
      <div className="flex lg:flex-row flex-col gap-2">
        <div className="lg:w-1/2 w-full">
          <Swiper modules={[Autoplay, Navigation]} spaceBetween={50} slidesPerView={1} onSlideChange={() => {
              console.log();
            }} onSwiper={""} autoplay navigation={true} pagination={{ clickable: true }} loop={true}>
            <SwiperSlide>
              <img src={banner} alt="" className="object-cover" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={banner2} alt="" className="object-cover" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={banner3} alt="" className="object-cover" />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="lg:w-1/2 w-full grid lg:grid-cols-4 grid-cols-2 gap-3">
          <Link to="/shopping_app/product-details" className="relative p-2 hover:shadow-lg h-full object-cover overflow-hidden cursor-pointer bg-white">
            <div className="absolute top-0 right-0 bg-red-400 text-white rounded-bl-2xl text-sm px-3">
              -50% Off
            </div>
            <img src={bluetooth} alt="" className="p-5 hover:scale-105" />
            <p className="text-blue-400 hover:text-blue-600">
              Amplify Oasis Series Portable Bluetooth Speaker
            </p>
          </Link>
          <Link to="/shopping_app/product-details" className="relative p-2 hover:shadow-lg h-full object-cover overflow-hidden cursor-pointer bg-white">
            <img src={airpods} alt="" className="p-5 hover:scale-105" />
            <p className="text-blue-400 hover:text-blue-600">AirPods Pro 3</p>
          </Link>
          <Link to="/shopping_app/product-details" className="relative p-2 hover:shadow-lg h-full object-cover overflow-hidden cursor-pointer bg-white">
            <img src={headphone} alt="" className="p-5 hover:scale-105" />
            <p className="text-blue-400 hover:text-blue-600">
              Inted Roar 301 Wireless Headphone
            </p>
          </Link>
          <Link to="/shopping_app/product-details" className="relative p-2 hover:shadow-lg h-full object-cover overflow-hidden cursor-pointer bg-white">
            <div className="absolute top-0 right-0 bg-red-400 text-white rounded-bl-2xl text-sm px-3">
              -15% Off
            </div>
            <img src={smartwatch} alt="" className="p-5 hover:scale-105" />
            <p className="text-blue-400 hover:text-blue-600">
              Apple Watch SE 44mm
            </p>
          </Link>
          <Link to="/shopping_app/product-details" className="relative p-2 hover:shadow-lg h-full object-cover overflow-hidden cursor-pointer bg-white">
            <div className="absolute top-0 right-0 bg-red-400 text-white rounded-bl-2xl text-sm px-3">
              -30% Off
            </div>
            <img src={gamingphone} alt="" className="p-5 hover:scale-105" />
            <p className="text-blue-400 hover:text-blue-600">
              Plextone Rx1 Gaming Earphone
            </p>
          </Link>
          <Link to="/shopping_app/product-details" className="relative p-2 hover:shadow-lg h-full object-cover overflow-hidden cursor-pointer bg-white">
            <img src={gamingmouse} alt="" className="p-5 hover:scale-105" />
            <p className="text-blue-400 hover:text-blue-600">
              Redragon Legend Chroma M990 RGB Gaming Mouse
            </p>
          </Link>
          <Link to="/shopping_app/product-details" className="relative p-2 hover:shadow-lg h-full object-cover overflow-hidden cursor-pointer bg-white">
            <img src={tripod} alt="" className="p-5 hover:scale-105" />
            <p className="text-blue-400 hover:text-blue-600">
              Ulanzi ST-27 Metal Phone Tripod Mount Clip 2476
            </p>
          </Link>
          <Link to="/shopping_app/product-details" className="relative p-2 hover:shadow-lg h-full object-cover overflow-hidden cursor-pointer bg-white">
            <img src={keyboard} alt="" className="p-5 hover:scale-105" />
            <p className="text-blue-400 hover:text-blue-600">
              Bluetooth Keyboard For Tablet Holder
            </p>
          </Link>
        </div>
      </div>
    </div>;
}
