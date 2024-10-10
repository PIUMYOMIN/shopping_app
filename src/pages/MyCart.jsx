import React from "react";
import { Link } from "react-router-dom";
import Iphone from "../asset/1617879104-w9DzEEYm.jpg";
import AirPot from "../asset/AirPod Pro.png";
import mini from "../asset/refurb-mac-mini-2020_AV2.jpeg";
import keyboard from "../asset/71ZAubfW1TL._AC_UF894,1000_QL80_.jpg";
import Jbl from "../asset/JBLBluetoothSpeaker_dd2d71ae-d3a3-41bd-94af-30ad3d05015b_600x.png";
import Huawei from "../asset/Huawei-MatePad-Pro-11-2022.jpg";
import Watch from "../asset/2D6mUyNqjvLTKi0L8ifUttHhgkJ.jpg";
import {
  BsChatLeftText,
  BsFillBoxFill,
  BsHeadset,
  BsPersonGear
} from "react-icons/bs";
import SubscribeButton from "../components/SubscribeButton";

export default function MyCart() {
  return (
    <div>
      <div className="max-w-screen-xl mx-auto">
        <div className="py-5">
          <div className="p-2 bg-blue-50 font-semibold">My cart (2)</div>
        </div>
        <div className="lg:flex gap-3">
          <div className="flex flex-col gap-3 items-start lg:w-3/4">
            <div className="lg:flex flex-row w-full border rounded-md p-2 gap-3">
              <div className="flex justify-center items-center">
                <img
                  src={Iphone}
                  alt=""
                  className="lg:w-96 w-48 object-cover"
                />
              </div>
              <div className="p-2">
                <div className="flex justify-between font-semibold text-2xl">
                  <div className="font-mono">Iphone 14 Pro</div>
                  <div className="text-red-500">$4,200</div>
                </div>
                <div className="text-slate-500 my-3 lg:w-3/4">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Illum corrupti ipsa iure culpa aspernatur, commodi inventore
                    totam corporis dolorem porro doloribus beatae velit facilis
                    fugit, hic sunt odit quae ad labore mollitia saepe
                    reprehenderit? Atque ullam tempore deserunt vero eveniet.
                  </p>
                </div>
                <div>
                  <button
                    type="button"
                    className="border border-red-400 text-red-400 rounded-md py-1 px-2 hover:bg-red-400 hover:text-white"
                  >
                    Remove
                  </button>
                  <button
                    type="button"
                    className="border border-green-400 text-green-400 rounded-md py-1 px-2 hover:bg-green-400 hover:text-white mx-3"
                  >
                    Save for later
                  </button>
                </div>
              </div>
            </div>
            <div className="lg:flex flex-row w-full border rounded-md p-2 gap-3">
              <div className="flex justify-center items-center">
                <img
                  src={AirPot}
                  alt=""
                  className="lg:w-96 w-48 object-cover"
                />
              </div>
              <div className="p-2">
                <div className="flex justify-between font-semibold text-2xl">
                  <div className="font-mono">AirPots Pro</div>
                  <div className="text-red-500">$780</div>
                </div>
                <div className="text-slate-500 my-3 lg:w-3/4">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Illum corrupti ipsa iure culpa aspernatur, commodi inventore
                    totam corporis dolorem porro doloribus beatae velit facilis
                    fugit, hic sunt odit quae ad labore mollitia saepe
                    reprehenderit? Atque ullam tempore deserunt vero eveniet.
                  </p>
                </div>
                <div>
                  <button
                    type="button"
                    className="border border-red-400 text-red-400 rounded-md py-1 px-2 hover:bg-red-400 hover:text-white"
                  >
                    Remove
                  </button>
                  <button
                    type="button"
                    className="border border-green-400 text-green-400 rounded-md py-1 px-2 hover:bg-green-400 hover:text-white mx-3"
                  >
                    Save for later
                  </button>
                </div>
              </div>
            </div>
            <div className="w-full">
              <div className="flex justify-between items-center">
                <div>
                  <button
                    type="button"
                    className="bg-blue-400 hover:bg-blue-300 text-white py-1 px-2 rounded-md"
                  >
                    Back to home
                  </button>
                </div>
                <div>
                  <button
                    type="button"
                    className="text-red-400 hover:underline py-1 px-2 rounded-md"
                  >
                    Remove all
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/4 flex flex-col lg:mt-0 mt-3 gap-3 text-slate-500">
            <div className="border rounded-md p-2">
              <form action="">
                <div className="font-thin">Have coupon?</div>
                <div className="flex items-center border rounded-md my-1 overflow-hidden">
                  <input
                    type="text"
                    className="p-2 outline-none"
                    placeholder="Add coupon"
                  />
                  <div className="text-center bg-gray-100 p-2 w-full">
                    <button type="button" className="text-blue-600">
                      Apply
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div className="border rounded-md p-2">
              <form action="">
                <div className="font-thin border-b border-b-gray-400 py-2">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Iusto, iste.
                  </p>
                </div>
                <div className="flex items-center my-1 overflow-hidden">
                  <div className="w-full">
                    <form action="">
                      <table className="w-full">
                        <tr>
                          <td>Item</td>
                          <td>2</td>
                        </tr>
                        <tr>
                          <td>Sub total</td>
                          <td>$4,200</td>
                        </tr>
                        <tr className="text-red-400">
                          <td>Discount</td>
                          <td>$62.5</td>
                        </tr>
                        <tr className="text-green-400 border-b">
                          <td>Tax</td>
                          <td>$5</td>
                        </tr>
                        <tr className="font-bold text-xl">
                          <td>Total</td>
                          <td>$4,143</td>
                        </tr>
                      </table>
                      <div className="mt-3">
                        <button
                          type="button"
                          className="w-full bg-green-400 text-white p-2 rounded-md"
                        >
                          Confirm
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="my-5">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 bg-gray-100 text-gray-400 py-7 lg:px-3 px-1">
            <div className="flex lg:justify-center items-center rounded-md bg-white p-5 gap-3">
              <BsHeadset className="lg:text-6xl text-4xl font-bold" />
              <div className="flex flex-col">
                <div className="lg:text-2xl font-semibold">1425</div>
                <div>24 Service</div>
              </div>
            </div>
            <div className="flex lg:justify-center items-center rounded-md bg-white p-5 gap-3">
              <BsPersonGear className="lg:text-6xl text-4xl font-bold" />
              <div className="flex flex-col">
                <div className="lg:text-2xl font-semibold">Services</div>
                <div>Fix and Maintenance</div>
              </div>
            </div>
            <div className="flex lg:justify-center items-center rounded-md bg-white p-5 gap-3">
              <BsFillBoxFill className="lg:text-6xl text-4xl font-bold" />
              <div className="flex flex-col">
                <div className="lg:text-2xl font-semibold">122 Cities</div>
                <div>Delivary reach</div>
              </div>
            </div>
            <div className="flex lg:justify-center items-center rounded-md bg-white p-5 gap-3">
              <BsChatLeftText className="lg:text-6xl text-4xl font-bold" />
              <div className="flex flex-col">
                <div className="lg:text-2xl font-semibold">Over 1000</div>
                <div>Daily Orders</div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-100 p-2">
          <div className="my-3 text-xl">Recommend Items</div>
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-3">
            <Link className="bg-slate-200">
              <div className="flex justify-center items-center  h-2/3 bg-white overflow-hidden">
                <img src={mini} alt="" className="object-cover" />
              </div>
              <div className="p-2 text-base">
                <div>
                  Mac mini Apple M1 Chip with 8‑Core CPU and 8‑Core GPU{" "}
                </div>
                {/* <div className="text-right text-xl text-red-500">$2,300</div> */}
              </div>
            </Link>
            <Link className="bg-slate-200">
              <div className="flex justify-center items-center bg-w h-2/3 bg-white overflow-hidden">
                <img src={keyboard} alt="" className="object-cover" />
              </div>
              <div className="p-2 text-base">
                <div>TECURS Gaming Keyboard-Wired USB Keyboard </div>
                {/* <div className="text-right text-xl text-red-500">$200</div> */}
              </div>
            </Link>
            <Link className="bg-slate-200">
              <div className="flex justify-center items-center h-2/3 bg-white overflow-hidden">
                <img src={Jbl} alt="" className="object-cover" />
              </div>
              <div className="p-2 text-base">
                <div>JBL Flip 6 | Portable Waterproof Speaker</div>
                {/* <div className="text-right text-xl text-red-500">$820</div> */}
              </div>
            </Link>
            <Link className="bg-slate-200">
              <div className="flex justify-center items-center h-2/3 bg-white overflow-hidden">
                <img src={Huawei} alt="" className="object-cover" />
              </div>
              <div className="p-2 text-base">
                <div>Huawei Mate Pad Pro with Smart Keyboard</div>
                {/* <div className="text-right text-xl text-red-500">$850</div> */}
              </div>
            </Link>
            <Link className="bg-slate-200">
              <div className="flex justify-center items-center h-2/3 bg-white overflow-hidden">
                <img src={Watch} alt="" className="object-cover" />
              </div>
              <div className="p-2 text-base">
                <div>Samsaung Smart Watch</div>
                {/* <div className="text-right text-xl text-red-500">$1200</div> */}
              </div>
            </Link>
          </div>
        </div>
      </div>
      <SubscribeButton />
    </div>
  );
}
