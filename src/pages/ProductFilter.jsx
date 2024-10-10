import React from "react";
import Sidebar from "../components/Sidebar";
import AccessorySection from "./../components/AccessorySection";
import xiaomi from "../asset/s-l1200.jpg";
import huawei from "../asset/huawei-p50-pro-black.jpg";
import samsung from "../asset/S24_Ultra.jpg";
import vivo from "../asset/Vivo-X100-Pro_featured-image-packshot-review.jpg";
import iphone from "../asset/Apple-iPhone-15-Pro-Max_-blue-titanium_featured-image-packshot-review.jpg";
import nokia from "../asset/1110i-nokia-mobile-phone.jpg";
import google from "../asset/716n8eAia+L._AC_UF894,1000_QL80_.jpg";
import iphone12 from "../asset/iphone-12-pro-max-argent-1_1.webp";
import oppo from "../asset/41f2o1XL3VL.jpg";
import infinix from "../asset/Infinix-Note-40-Pro-Vintage-Green-5G--1-square_medium.png";
import huaweiP30 from "../asset/HUAWEI-P30-lite-1.png";
import samsungAo5 from "../asset/Samsung-Galaxy-A05---1-square_medium.png";
import { Link } from "react-router-dom";
import { FaAngleLeft, FaAngleRight, FaList, FaMicrosoft, FaTimes } from "react-icons/fa";

export default function ProductFilter() {
  return (
    <>
      <div className="my-5">Home / Category / Mobile Phone</div>
      <div className="mt-10">
        <div className="flex flex-row gap-2">
          {/* Sidebar start */}
          <Sidebar />
          {/* Sidebar end  */}
          {/* main section start  */}
          <div className="lg:w-9/12">
            <div className="flex flex-row justify-between items-center p-2 mb-5 bg-white">
              <div>
                10,850 items in <span className="font-bold">Mobile Phone</span>
              </div>
              <div>
                <form action="">
                  <div className="flex flex-row justify-center items-center gap-2">
                    <div className="flex items-center">
                      <label htmlFor="verify">Verify Only</label>
                      <input
                        type="checkbox"
                        id="verify"
                        className="mx-1 w-5 h-5"
                      />
                    </div>
                    <div>
                      <select
                        name=""
                        id=""
                        className="border-2 outline-none rounded-md px-1"
                      >
                        <option value="">Features</option>
                        <option value="">Limited</option>
                      </select>
                    </div>
                    <div className="flex bg-white p-1 gap-1">
                      <FaList />
                      <FaMicrosoft />
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="flex flex-row justify-between items-center p-2 mb-5">
              <div className="flex flex-wrap gap-3">
                <div>
                  <div className="flex justify-center items-center gap-1 p-1 border border-gray-400 rounded-md"><span>Apple</span> <div className="text-neutral-500"><FaTimes /></div> </div>
                </div>
                <div>
                  <div className="flex justify-center items-center gap-1 p-1 border border-gray-400 rounded-md"><span>Samsung</span> <div className="text-neutral-500"><FaTimes /></div> </div>
                </div>
                <div>
                  <div className="flex justify-center items-center gap-1 p-1 border border-gray-400 rounded-md"><span>Huawei</span> <div className="text-neutral-500"><FaTimes /></div> </div>
                </div>
                <div>
                  <div className="flex justify-center items-center gap-1 p-1 border border-gray-400 rounded-md"><span>Vivo</span> <div className="text-neutral-500"><FaTimes /></div> </div>
                </div>
                <div>
                  <div className="flex justify-center items-center gap-1 p-1 border border-gray-400 rounded-md"><span>Oppo</span> <div className="text-neutral-500"><FaTimes /></div> </div>
                </div>
              </div>
            </div>
            {/* latest models start */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
              <Link
                to="/shopping_app/product-details"
                className="flex flex-col shadow-lg"
              >
                <div className="w-full h-full bg-white flex justify-center items-center overflow-hidden">
                  <img
                    src={huawei}
                    alt=""
                    className="object-fit w-full hover:scale-105 transition duration-400 ease-in-out"
                  />
                </div>
                <div className="px-1 py-3 bg-gray-300">
                  <div>
                    <h4 className="lg:text-xl text-blue-600 lg:font-semibold">
                      Huawei P50 pro
                      {/* <sup className="bg-green-100 text-green-800 text-xs font-medium me-2 lg:px-2.5 lg:py-0.5 rounded dark:bg-green-900 dark:text-green-300">
                  New
                </sup> */}
                    </h4>
                  </div>
                  <div>
                    <div className="text-xs">Color: Black, White</div>
                    <span className="lg:text-2xl text-red-500">Ks 450,000</span>
                    <small className="text-red-400 line-through ml-2">
                      ks10000
                    </small>
                  </div>
                </div>
              </Link>
              <Link
                to="/shopping_app/product-details"
                className="flex flex-col shadow-lg"
              >
                <div className="w-full h-full bg-white flex justify-center items-center overflow-hidden">
                  <img
                    src={samsung}
                    alt=""
                    className="object-fit w-full hover:scale-105 transition duration-400 ease-in-out"
                  />
                </div>
                <div className="px-1 py-3 bg-gray-300 w-full">
                  <div>
                    <h4 className="lg:text-xl text-blue-600 lg:font-semibold">
                      Samsung S24 Ultra
                      {/* <sup className="bg-red-100 text-red-800 text-xs font-medium me-2 lg:px-2.5 lg:py-0.5 rounded dark:bg-red-900 dark:text-red-300">
                  Second
                </sup> */}
                    </h4>
                  </div>
                  <div>
                    <div className="text-xs">Color: Black, Silver</div>
                    <span className="lg:text-2xl text-red-500">Ks 450,000</span>
                    <small className="text-red-400 line-through ml-2">
                      ks10000
                    </small>
                  </div>
                </div>
              </Link>
              <Link
                to="/shopping_app/product-details"
                className="flex flex-col shadow-lg"
              >
                <div className="w-full h-full bg-white flex justify-center items-center overflow-hidden">
                  <img
                    src={xiaomi}
                    alt=""
                    className="object-fit w-full hover:scale-105 transition duration-400 ease-in-out"
                  />
                </div>
                <div className="px-2 py-3 bg-gray-300 w-full">
                  <div>
                    <h4 className="lg:text-xl text-blue-600 lg:font-semibold">
                      Xiaomi 14 Ultra 5G
                      {/* <sup className="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">
                New
              </sup> */}
                    </h4>
                  </div>
                  <div>
                    <div className="text-xs">Color: Titanium Gray</div>
                    <span className="lg:text-2xl text-red-500">Ks 450,000</span>
                    <small className="text-red-400 line-through ml-2">
                      ks10000
                    </small>
                  </div>
                </div>
              </Link>
              <Link
                to="/shopping_app/product-details"
                className="flex flex-col shadow-lg"
              >
                <div className="w-full h-full bg-white flex justify-center items-center overflow-hidden">
                  <img
                    src={vivo}
                    alt=""
                    className="object-fit w-full hover:scale-105 transition duration-400 ease-in-out"
                  />
                </div>
                <div className="px-2 py-3 bg-gray-300 w-full">
                  <div>
                    <h4 className="lg:text-xl text-blue-600 lg:font-semibold">
                      Vivo x100 Pro Plus
                      {/* <sup className="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">
                New
              </sup> */}
                    </h4>
                  </div>
                  <div>
                    <div className="text-xs">Color: Blace, White, Pink</div>
                    <span className="lg:text-2xl text-red-500">Ks 450,000</span>
                    <small className="text-red-400 line-through ml-2">
                      ks10000
                    </small>
                  </div>
                </div>
              </Link>
              <Link
                to="/shopping_app/product-details"
                className="flex flex-col shadow-lg"
              >
                <div className="w-full h-full bg-white flex justify-center items-center overflow-hidden">
                  <img
                    src={iphone}
                    alt=""
                    className="object-fit w-full hover:scale-105 transition duration-400 ease-in-out"
                  />
                </div>
                <div className="px-2 py-3 bg-gray-300 w-full">
                  <div>
                    <h4 className="lg:text-xl text-blue-600 lg:font-semibold">
                      iPhone 15 Pro Max
                      {/* <sup className="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">
                New
              </sup> */}
                    </h4>
                  </div>
                  <div>
                    <div className="text-xs">Color: Blace, White, Pink</div>
                    <span className="lg:text-2xl text-red-500">Ks 450,000</span>
                    <small className="text-red-400 line-through ml-2">
                      ks10000
                    </small>
                  </div>
                </div>
              </Link>
              <Link
                to="/shopping_app/product-details"
                className="flex flex-col shadow-lg"
              >
                <div className="w-full h-full bg-white flex justify-center items-center overflow-hidden">
                  <img
                    src={nokia}
                    alt=""
                    className="object-fit w-full hover:scale-105 transition duration-400 ease-in-out"
                  />
                </div>
                <div className="px-2 py-3 bg-gray-300 w-full">
                  <div>
                    <h4 className="lg:text-xl text-blue-600 lg:font-semibold">
                      Nokia 1110i
                      {/* <sup className="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">
                Second
              </sup> */}
                    </h4>
                  </div>
                  <div>
                    <div className="text-xs">Color: Gray</div>
                    <span className="lg:text-2xl text-red-500">Ks 450,000</span>
                    <small className="text-red-400 line-through ml-2">
                      ks10000
                    </small>
                  </div>
                </div>
              </Link>
              <Link
                to="/shopping_app/product-details"
                className="flex flex-col shadow-lg"
              >
                <div className="w-full h-full bg-white flex justify-center items-center overflow-hidden">
                  <img
                    src={oppo}
                    alt=""
                    className="object-fit w-full lg:-full hover:scale-105 transition duration-400 ease-in-out"
                  />
                </div>
                <div className="px-2 py-3 bg-gray-300 w-full">
                  <div>
                    <h4 className="lg:text-xl text-blue-600 lg:font-semibold">
                      OPPO Reno6 5G
                      {/* <sup className="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">
                Second
              </sup> */}
                    </h4>
                  </div>
                  <div>
                    <div className="text-xs">Color: Aurora</div>
                    <span className="lg:text-2xl text-red-500">Ks 450,000</span>
                    <small className="text-red-400 line-through ml-2">
                      ks10000
                    </small>
                  </div>
                </div>
              </Link>
              <Link
                to="/shopping_app/product-details"
                className="flex flex-col shadow-lg"
              >
                <div className="w-full h-full flex justify-center items-center bg-white overflow-hidden">
                  <img
                    src={google}
                    alt=""
                    className="object-fit w-full hover:scale-105 transition duration-400 ease-in-out"
                  />
                </div>
                <div className="px-2 py-3 bg-gray-300 w-full">
                  <div>
                    <h4 className="lg:text-xl text-blue-600 lg:font-semibold">
                      Google Pixel 6 Pro
                      {/* <sup className="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">
                Second
              </sup> */}
                    </h4>
                  </div>
                  <div>
                    <div className="text-xs">Color: Aurora</div>
                    <span className="lg:text-2xl text-red-500">Ks 450,000</span>
                    <small className="text-red-400 line-through ml-2">
                      ks10000
                    </small>
                  </div>
                </div>
              </Link>
              <Link
                to="/shopping_app/product-details"
                className="flex flex-col shadow-lg"
              >
                <div className="w-full h-full flex justify-center items-center bg-white overflow-hidden">
                  <img
                    src={iphone12}
                    alt=""
                    className="object-fit w-full hover:scale-105 transition duration-400 ease-in-out"
                  />
                </div>
                <div className="px-2 py-3 bg-gray-300 w-full">
                  <div>
                    <h4 className="lg:text-xl text-blue-600 lg:font-semibold">
                      iPhone 12 Pro Max
                      {/* <sup className="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">
                Second
              </sup> */}
                    </h4>
                  </div>
                  <div>
                    <div className="text-xs">Color: Aurora</div>
                    <span className="lg:text-2xl text-red-500">Ks 450,000</span>
                    <small className="text-red-400 line-through ml-2">
                      ks10000
                    </small>
                  </div>
                </div>
              </Link>
              <Link
                to="/shopping_app/product-details"
                className="flex flex-col shadow-lg"
              >
                <div className="w-full h-full flex justify-center items-center bg-white overflow-hidden">
                  <img
                    src={infinix}
                    alt=""
                    className="object-fit w-full hover:scale-105 transition duration-400 ease-in-out"
                  />
                </div>
                <div className="px-2 py-3 bg-gray-300 w-full">
                  <div>
                    <h4 className="lg:text-xl text-blue-600 lg:font-semibold">
                      Infinix Note 40 Pro
                      {/* <sup className="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">
                Second
              </sup> */}
                    </h4>
                  </div>
                  <div>
                    <div className="text-xs">Color: Vintage Green</div>
                    <span className="lg:text-2xl text-red-500">Ks 880,000</span>
                    <small className="text-red-400 line-through ml-2">
                      ks10000
                    </small>
                  </div>
                </div>
              </Link>
              <Link
                to="/shopping_app/product-details"
                className="flex flex-col shadow-lg"
              >
                <div className="w-full h-full flex justify-center items-center bg-white overflow-hidden">
                  <img
                    src={huaweiP30}
                    alt=""
                    className="object-fit w-full hover:scale-105 transition duration-400 ease-in-out"
                  />
                </div>
                <div className="px-2 py-3 bg-gray-300 w-full">
                  <div>
                    <h4 className="lg:text-xl text-blue-600 lg:font-semibold">
                      Huawei P30 Lite
                      {/* <sup className="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">
                Second
              </sup> */}
                    </h4>
                  </div>
                  <div>
                    <div className="text-xs">Color: Skyblue</div>
                    <span className="lg:text-2xl text-red-500">Ks 880,000</span>
                    <small className="text-red-400 line-through ml-2">
                      ks10000
                    </small>
                  </div>
                </div>
              </Link>
              <Link
                to="/shopping_app/product-details"
                className="flex flex-col shadow-lg"
              >
                <div className="w-full h-full flex justify-center items-center bg-white overflow-hidden">
                  <img
                    src={samsungAo5}
                    alt=""
                    className="object-fit w-full hover:scale-105 transition duration-400 ease-in-out"
                  />
                </div>
                <div className="px-2 py-3 bg-gray-300 w-full">
                  <div>
                    <h4 className="lg:text-xl text-blue-600 lg:font-semibold">
                      Samsung Galaxy A05
                      {/* <sup className="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">
                Second
              </sup> */}
                    </h4>
                  </div>
                  <div>
                    <div className="text-xs">Color: Skyblue</div>
                    <span className="lg:text-2xl text-red-500">Ks 880,000</span>
                    <small className="text-red-400 line-through ml-2">
                      ks10000
                    </small>
                  </div>
                </div>
              </Link>
            </div>
            {/* latest models end */}
            {/* pagination start  */}
            <div className="flex justify-end my-5">
              <div className="flex flex-row justify-center items-center gap-2">
                <div>
                  <span className="p-1 cursor-pointer text-gray-500 border-2">Show more</span>
                </div>
                <div className="flex border-2">
                  <span className="flex justify-center items-center bg-gray-200 w-8 h-8 p-1 hover:bg-gray-300 cursor-pointer">
                  <FaAngleLeft className="text-gray-500"/>
                  </span>
                <span className="w-8 h-8 border-x border-gray-300 p-1 text-center hover:bg-gray-300 cursor-pointer">
                  1
                </span>
                <span className="bg-gray-200 w-8 h-8 border-x border-gray-300 p-1 text-center hover:bg-gray-300 cursor-pointer">
                  2
                </span>
                <span className="bg-gray-200 w-8 h-8 border-x border-gray-300 p-1 text-center hover:bg-gray-300 cursor-pointer">
                  3
                </span>
                <span className="bg-gray-200 w-8 h-8 border-x border-gray-300 p-1 text-center hover:bg-gray-300 cursor-pointer">
                  4
                </span>
                  <span className="flex justify-center items-center bg-gray-200 w-8 h-8 p-1 hover:bg-gray-300 cursor-pointer">
                  <FaAngleRight className="text-black"/>
                  </span>
                </div>
                </div>
              </div>
            </div>
            {/* pagination end  */}
          </div>
          {/* main section end  */}
        </div>
    </>
  );
}
