import React from "react";
import bluetooth from "../asset/bluetooth.png";
import airpods from "../asset/AirPods 3.jpg";
import headphone from "../asset/headphone.png";
import smartwatch from "../asset/smart_watch.png";
import gamingphone from "../asset/gaming_ear_phone.png";
import gamingmouse from "../asset/gaming_mouse.png";
import tripod from "../asset/metal_phone_tripod.png";
import keyboard from "../asset/bluetooth_keyboard.png";
import ipadPro from "../asset/ipad_pro.png";
import { Link } from "react-router-dom";
export default function AccessorySection() {
  return <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 py-5">
      <Link to="/shopping_app/product-details" className="flex flex-col shadow-lg bg-gray-300">
        <div className="overflow-hidden lg:h-64">
          <img src={smartwatch} alt="" className="object-fit w-full lg:h-full hover:scale-105 transition duration-400 ease-in-out" />
        </div>
        <div className="px-2 py-3">
          <h4 className="text-blue-600 lg:font-semibold">
            Apple Watch SE 44mm
          </h4>
          <div className="text-xs">Color: Black, White</div>
          <span className="lg:text-2xl text-red-500">Ks 450,000</span>
          <small className="text-red-400 line-through ml-2">ks10000</small>
        </div>
      </Link>
      <Link to="/shopping_app/product-details" className="flex flex-col shadow-lg bg-gray-300">
        <div className="overflow-hidden lg:h-64">
          <img src={airpods} alt="" className="object-fit w-full lg:h-full hover:scale-105 transition duration-400 ease-in-out" />
        </div>
        <div className="px-2 py-3">
          <h4 className="text-blue-600 lg:font-semibold">
            Apple AirPods 3 Pro
          </h4>
          <div className="text-xs">Color: Black, Silver</div>
          <span className="lg:text-2xl text-red-500">Ks 450,000</span>
          <small className="text-red-400 line-through ml-2">ks10000</small>
        </div>
      </Link>
      <Link to="/shopping_app/product-details" className="flex flex-col shadow-lg bg-gray-300">
        <div className="overflow-hidden lg:h-64">
          <img src={gamingphone} alt="" className="object-fit w-full lg:h-full hover:scale-105 transition duration-400 ease-in-out" />
        </div>
        <div className="px-2 py-3">
          <h4 className="text-blue-600 lg:font-semibold">
            Plextone Rx1 Gaming Earphone
          </h4>
          <div className="text-xs">Color: Titanium Gray</div>
          <span className="lg:text-2xl text-red-500">Ks 450,000</span>
          <small className="text-red-400 line-through ml-2">ks10000</small>
        </div>
      </Link>
      <Link to="/shopping_app/product-details" className="flex flex-col shadow-lg bg-gray-300">
        <div className="overflow-hidden lg:h-64">
          <img src={bluetooth} alt="" className="object-fit w-full lg:h-full hover:scale-105 transition duration-400 ease-in-out" />
        </div>
        <div className="px-2 py-3">
          <h4 className="text-blue-600 lg:font-semibold">
            Amplify Oasis Series Portable Bluetooth Speaker
          </h4>
          <div className="text-xs">Color: Blace, White, Pink</div>
          <span className="lg:text-2xl text-red-500">Ks 450,000</span>
          <small className="text-red-400 line-through ml-2">ks10000</small>
        </div>
      </Link>
      <Link to="/shopping_app/product-details" className="flex flex-col shadow-lg bg-gray-300">
        <div className="overflow-hidden lg:h-64">
          <img src={headphone} alt="" className="object-fit w-full lg:h-full hover:scale-105 transition duration-400 ease-in-out" />
        </div>
        <div className="px-2 py-3">
          <h4 className="text-blue-600 lg:font-semibold">
            Inted Roar 301 Wireless Headphone
          </h4>
          <div className="text-xs">Color: Blace, White, Pink</div>
          <span className="lg:text-2xl text-red-500">Ks 450,000</span>
          <small className="text-red-400 line-through ml-2">ks10000</small>
        </div>
      </Link>
      <Link to="/shopping_app/product-details" className="flex flex-col shadow-lg bg-gray-300">
        <div className="overflow-hidden lg:h-64">
          <img src={gamingmouse} alt="" className="object-fit w-full lg:h-full hover:scale-105 transition duration-400 ease-in-out" />
        </div>
        <div className="px-2 py-3">
          <h4 className="text-blue-600 lg:font-semibold">
            Redragon Legend Chroma M990 RGB Gaming Mouse
          </h4>
          <div className="text-xs">Color: Gray</div>
          <span className="lg:text-2xl text-red-500">Ks 450,000</span>
          <small className="text-red-400 line-through ml-2">ks10000</small>
        </div>
      </Link>
      <Link to="/shopping_app/product-details" className="flex flex-col shadow-lg bg-gray-300">
        <div className="overflow-hidden lg:h-64">
          <img src={keyboard} alt="" className="object-fit w-full lg:h-full hover:scale-105 transition duration-400 ease-in-out" />
        </div>
        <div className="px-2 py-3">
          <h4 className="text-blue-600 lg:font-semibold">
            Bluetooth Keyboard For Tablet Holder
          </h4>
          <div className="text-xs">Color: Aurora</div>
          <span className="lg:text-2xl text-red-500">Ks 450,000</span>
          <small className="text-red-400 line-through ml-2">ks10000</small>
        </div>
      </Link>
      <Link to="/shopping_app/product-details" className="flex flex-col shadow-lg bg-gray-300">
        <div className="overflow-hidden lg:h-64">
          <img src={tripod} alt="" className="object-fit w-full lg:h-full hover:scale-105 transition duration-400 ease-in-out" />
        </div>
        <div className="px-2 py-3">
          <h4 className="text-blue-600 lg:font-semibold">
            Ulanzi ST-27 Metal Phone Tripod Mount Clip 2476
          </h4>
          <div className="text-xs">Color: Aurora</div>
          <span className="lg:text-2xl text-red-500">Ks 450,000</span>
          <small className="text-red-400 line-through ml-2">ks10000</small>
        </div>
      </Link>
      <Link to="/shopping_app/product-details" className="flex flex-col shadow-lg bg-gray-300">
        <div className="overflow-hidden lg:h-64">
          <img src={ipadPro} alt="" className="object-fit w-full lg:h-full hover:scale-105 transition duration-400 ease-in-out" />
        </div>
        <div className="px-2 py-3">
          <h4 className="text-blue-600 lg:font-semibold">
            11-inch iPad Pro Wi-Fi 256GB
          </h4>
          <div className="text-xs">Color: Aurora</div>
          <span className="lg:text-2xl text-red-500">Ks 450,000</span>
          <small className="text-red-400 line-through ml-2">ks10000</small>
        </div>
      </Link>
    </div>;
}
