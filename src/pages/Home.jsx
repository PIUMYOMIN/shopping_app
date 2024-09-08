import React from "react";
import banner4 from "../asset/3.png";
import Sidebar from "../components/Sidebar";
import LatestModels from "../components/LatestModels";
import HeaderCarousel from "../components/HeaderCarousel";
import AccessorySection from './../components/AccessorySection';
export default function Home() {
  return (
    <>
      <HeaderCarousel />
    <div className="bg-slate-100">
      <div className="flex flex-row gap-2">
        {/* Sidebar start */}
        <Sidebar />
        {/* Sidebar end  */}
        {/* main section start  */}
        <div className="lg:w-9/12">
            {/* latest models start */}
            <LatestModels />
          {/* latest models end */}
            {/* pagination start  */}
          {/* <div className="flex justify-center items-center my-5">
            <div className="flex flex-row gap-2">
              <span className="p-1 cursor-pointer">Prev</span>
              <span className="bg-orange-300 w-8 h-8 p-1 rounded-full text-center hover:bg-orange-400 cursor-pointer">
                1
              </span>
              <span className="bg-orange-300 w-8 h-8 p-1 rounded-full text-center hover:bg-orange-400 cursor-pointer">
                2
              </span>
              <span className="bg-orange-300 w-8 h-8 p-1 rounded-full text-center hover:bg-orange-400 cursor-pointer">
                3
              </span>
              <span className="bg-orange-300 w-8 h-8 p-1 rounded-full text-center hover:bg-orange-400 cursor-pointer">
                4
              </span>
              <span className="bg-orange-300 w-8 h-8 p-1 rounded-full text-center hover:bg-orange-400 cursor-pointer">
                5
              </span>
              <span className="p-1 cursor-pointer">Next</span>
            </div>
            </div> */}
            {/* pagination end  */}
          <div className="w-full my-5">
            <img src={banner4} alt="" className="object-cover w-full" />
          </div>
          <AccessorySection />
        </div>
        {/* main section end  */}
      </div>
    </div>
    </>
  );
}
