import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="w-3/12 hidden lg:block">
      <div className="pb-3 shadow-md">
        <h4 className="p-2 rounded-t-xl bg-blue-700 text-white">Brands</h4>
        <div className="mt-3 dark:divide-gray-400">
          <form>
            <ul className="max-w-md divide-y divide-gray-200">
              <li className="px-3">
                <Link
                  to="/shopping_app/product-filter"
                  className="flex flex-row justify-between items-center"
                >
                  <label htmlFor="apple" className="cursor-pointer">
                    Apple
                  </label>
                  <input
                    type="checkbox"
                    name=""
                    id="apple"
                    value=""
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                    required
                  />
                </Link>
              </li>
              <li className="flex flex-row justify-between items-center px-3">
                <label htmlFor="samsung" className="cursor-pointer">
                  Samsung
                </label>
                <input
                  type="checkbox"
                  name=""
                  id="samsung"
                  value=""
                  className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                  required
                />
              </li>
              <li className="flex flex-row justify-between items-center px-3">
                <label htmlFor="huawei" className="cursor-pointer">
                  Huawei
                </label>
                <input
                  type="checkbox"
                  name=""
                  id="huawei"
                  value=""
                  className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                  required
                />
              </li>
              <li className="flex flex-row justify-between items-center px-3">
                <label htmlFor="nokia" className="cursor-pointer">
                  Nokia
                </label>
                <input
                  type="checkbox"
                  name=""
                  id="nokia"
                  value=""
                  className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                  required
                />
              </li>
              <li className="flex flex-row justify-between items-center px-3">
                <label htmlFor="xiaomi" className="cursor-pointer">
                  Xiaomi
                </label>
                <input
                  type="checkbox"
                  name=""
                  id="xiaomi"
                  value=""
                  className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                  required
                />
              </li>
              <li className="flex flex-row justify-between items-center px-3">
                <label htmlFor="google" className="cursor-pointer">
                  Google Pixel
                </label>
                <input
                  type="checkbox"
                  name=""
                  id="google"
                  value=""
                  className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                  required
                />
              </li>
              <li className="flex flex-row justify-between items-center px-3">
                <label htmlFor="vivo" className="cursor-pointer">
                  Vivo
                </label>
                <input
                  type="checkbox"
                  name=""
                  id="vivo"
                  value=""
                  className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                  required
                />
              </li>
              <li className="flex flex-row justify-between items-center px-3">
                <label htmlFor="oppo" className="cursor-pointer">
                  Oppo
                </label>
                <input
                  type="checkbox"
                  name=""
                  id="oppo"
                  value=""
                  className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                  required
                />
              </li>
            </ul>
          </form>
        </div>
      </div>
      <div className="mt-5 pb-3 shadow-md">
        <h4 className="p-2 rounded-t-xl bg-blue-700 text-white">Accessories</h4>
        <div className="mt-3 dark:divide-gray-400">
          <form>
            <ul className="max-w-md divide-y divide-gray-200 px-3">
              <li className="flex flex-row justify-between items-center">
                <label htmlFor="airpods" className="cursor-pointer">
                  Air Pods
                </label>
                <input
                  type="checkbox"
                  name=""
                  id="airpods"
                  value=""
                  className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                  required
                />
              </li>
              <li className="flex flex-row justify-between items-center">
                <label htmlFor="smart_watch" className="cursor-pointer">
                  Smart Watch
                </label>
                <input
                  type="checkbox"
                  name=""
                  id="smart_watch"
                  value=""
                  className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                  required
                />
              </li>
              <li className="flex flex-row justify-between items-center">
                <label htmlFor="bluetooth_speaker" className="cursor-pointer">
                  Bluetooth Speaker
                </label>
                <input
                  type="checkbox"
                  name=""
                  id="bluetooth_speaker"
                  value=""
                  className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                  required
                />
              </li>
              <li className="flex flex-row justify-between items-center">
                <label htmlFor="powerbank" className="cursor-pointer">
                  Power Bank
                </label>
                <input
                  type="checkbox"
                  name=""
                  id="powerbank"
                  value=""
                  className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                  required
                />
              </li>
              <li className="flex flex-row justify-between items-center">
                <label htmlFor="tripod" className="cursor-pointer">
                  Mobile/Tablet Tripod
                </label>
                <input
                  type="checkbox"
                  name=""
                  id="tripod"
                  value=""
                  className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                  required
                />
              </li>
              <li className="flex flex-row justify-between items-center">
                <label htmlFor="keyboard" className="cursor-pointer">
                  Mobile/Tablet Keyboard
                </label>
                <input
                  type="checkbox"
                  name=""
                  id="keyboard"
                  value=""
                  className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                  required
                />
              </li>
              <li className="flex flex-row justify-between items-center">
                <label htmlFor="stabilizer" className="cursor-pointer">
                  Gimbal Stabilizer
                </label>
                <input
                  type="checkbox"
                  name=""
                  id="stabilizer"
                  value=""
                  className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                  required
                />
              </li>
            </ul>
          </form>
        </div>
      </div>
      <div className="mt-5 pb-3 shadow-md">
        <h4 className="p-2 rounded-t-xl bg-blue-700 text-white">Condition</h4>
        <div className="mt-3 dark:divide-gray-400">
          <form>
            <ul className="max-w-md divide-y divide-gray-200 px-3">
              <li className="flex flex-row justify-between items-center">
                <label htmlFor="any" className="cursor-pointer">
                  Any
                </label>
                <input
                  type="checkbox"
                  name=""
                  id="any"
                  value=""
                  className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                  required
                />
              </li>
              <li className="flex flex-row justify-between items-center">
                <label htmlFor="brand_new" className="cursor-pointer">
                  Brand New
                </label>
                <input
                  type="checkbox"
                  name=""
                  id="brand_new"
                  value=""
                  className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                  required
                />
              </li>
              <li className="flex flex-row justify-between items-center">
                <label htmlFor="refur" className="cursor-pointer">
                  Refurbished
                </label>
                <input
                  type="checkbox"
                  name=""
                  id="refur"
                  value=""
                  className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                  required
                />
              </li>
              <li className="flex flex-row justify-between items-center">
                <label htmlFor="old" className="cursor-pointer">
                  Old
                </label>
                <input
                  type="checkbox"
                  name=""
                  id="old"
                  value=""
                  className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                  required
                />
              </li>
            </ul>
          </form>
        </div>
      </div>
      <div className="mt-5 pb-3 shadow-md">
        <h4 className="p-2 rounded-t-xl bg-blue-700 text-white">Color</h4>
        <div className="mt-3 dark:divide-gray-400 px-3">
          <form>
            <div className="flex flex-wrap">
              <div>
                <Link to="#!">
                  <span className="bg-gray-100 text-white text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-gray-700 dark:text-white">
                    Black
                  </span>
                </Link>
              </div>
              <div>
                <Link to="#!">
                  <span className="bg-red-100 text-white text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-red-900 dark:text-white">
                    Red
                  </span>
                </Link>
              </div>
              <div>
                <Link to="#!">
                  <span className="bg-yellow-100 text-white text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-yellow-900 dark:text-white">
                    Yellow
                  </span>
                </Link>
              </div>
              <div>
                <Link href="#!">
                  <span className="bg-purple-100 text-white text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-purple-900 dark:text-white">
                    Purple
                  </span>
                </Link>
              </div>
              <div>
                <Link to="#!">
                  <span className="bg-pink-100 text-white text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-pink-900 dark:text-white">
                    Pink
                  </span>
                </Link>
              </div>
              <div>
                <Link to="#">
                  <span className="bg-stone-500 text-white text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-stone-500 dark:text-white">
                    Titanium
                  </span>
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="mt-5 pb-3 shadow-md">
        <h4 className="p-2 rounded-t-xl bg-blue-700 text-white">Storage</h4>
        <div className="mt-3 dark:divide-gray-400 px-3">
          <form>
            <div className="flex flex-wrap">
              <div>
                <Link to="#!">
                  <span className="bg-gray-100 text-white text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-gray-700 dark:text-white">
                    32GB
                  </span>
                </Link>
                <Link to="#!">
                  <span className="bg-gray-100 text-white text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-gray-700 dark:text-white">
                    64GB
                  </span>
                </Link>
                <Link to="#!">
                  <span className="bg-gray-100 text-white text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-gray-700 dark:text-white">
                    128GB
                  </span>
                </Link>
                <Link to="#!">
                  <span className="bg-gray-100 text-white text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-gray-700 dark:text-white">
                    512GB
                  </span>
                </Link>
                <Link to="#!">
                  <span className="bg-gray-100 text-white text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-gray-700 dark:text-white">
                    1TB
                  </span>
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
