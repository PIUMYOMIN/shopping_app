import React from "react";

export default function Sidebar() {
  return (
    <div className="w-3/12 hidden lg:block">
      <h4 className="p-2 rounded-t-xl bg-blue-700 text-white">
        Choose Your Prefer
      </h4>
      <div className="mt-3 shadow-md">
        <h4>Brands</h4>
        <div className="mt-3">
          <form>
            <ul className="max-w-md divide-y divide-gray-200 dark:divide-gray-400">
              <li className="flex flex-row justify-between items-center px-3">
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
      <div className="mt-3 shadow-md">
        <h4 className="px-3">Accessories</h4>
        <div className=" bg-slate-200 mt-3">
          <form>
            <ul className="max-w-md divide-y divide-gray-200 dark:divide-gray-400">
              <li className="flex flex-row justify-between items-center px-3">
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
              <li className="flex flex-row justify-between items-center px-3">
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
              <li className="flex flex-row justify-between items-center px-3">
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
              <li className="flex flex-row justify-between items-center px-3">
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
              <li className="flex flex-row justify-between items-center px-3">
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
              <li className="flex flex-row justify-between items-center px-3">
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
              <li className="flex flex-row justify-between items-center px-3">
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
      <div className="mt-3 shadow-md">
        <h4 className="px-3">Color</h4>
        <div className=" bg-slate-200 mt-3">
          <form>
            <div className="flex flex-wrap">
              <a href="#!">
                <span className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-gray-700 dark:text-gray-300">
                  Black
                </span>
              </a>
              <a href="#!">
                <span className="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-red-900 dark:text-red-300">
                  Red
                </span>
              </a>
              <a href="#!">
                <span className="bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-yellow-900 dark:text-yellow-300">
                  Yellow
                </span>
              </a>
              <a href="#!">
                <span className="bg-purple-100 text-purple-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-purple-900 dark:text-purple-300">
                  Purple
                </span>
              </a>
              <a href="#!">
                <span className="bg-pink-100 text-pink-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-pink-900 dark:text-pink-300">
                  Pink
                </span>
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
