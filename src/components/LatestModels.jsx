import React from "react";
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
export default function LatestModels() {
  return (
    <div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 mt-2">
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
              <small className="text-red-400 line-through ml-2">ks10000</small>
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
              <small className="text-red-400 line-through ml-2">ks10000</small>
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
              <small className="text-red-400 line-through ml-2">ks10000</small>
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
              <small className="text-red-400 line-through ml-2">ks10000</small>
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
              <small className="text-red-400 line-through ml-2">ks10000</small>
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
              <small className="text-red-400 line-through ml-2">ks10000</small>
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
              <small className="text-red-400 line-through ml-2">ks10000</small>
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
              <small className="text-red-400 line-through ml-2">ks10000</small>
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
              <small className="text-red-400 line-through ml-2">ks10000</small>
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
              <small className="text-red-400 line-through ml-2">ks10000</small>
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
              <small className="text-red-400 line-through ml-2">ks10000</small>
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
              <small className="text-red-400 line-through ml-2">ks10000</small>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
