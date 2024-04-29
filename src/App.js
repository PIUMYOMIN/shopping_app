import React,{useState} from "react";
import {
  FaAlignRight,
  FaAngleDoubleRight,
  FaAngleRight,
  FaRegUserCircle,
  FaShoppingCart,
  FaHeart,
  FaShopware,
  FaSearch
} from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import banner from "./asset/banner.png";
import banner2 from "./asset/banner2.png";
import banner3 from "./asset/banner3.png";
import bluetooth from "./asset/bluetooth.png";
import airpods from "./asset/AirPods 3.jpg"
import headphone from "./asset/headphone.png";
import smartwatch from "./asset/smart_watch.png";
import gamingphone from "./asset/gaming_ear_phone.png";
import gamingmouse from "./asset/gaming_mouse.png";
import tripod from "./asset/metal_phone_tripod.png";
import keyboard from "./asset/bluetooth_keyboard.png";
import xiaomi from "./asset/s-l1200.jpg"
import huawei from "./asset/huawei-p50-pro-black.jpg"
import samsung from "./asset/S24_Ultra.jpg"
import vivo from "./asset/Vivo-X100-Pro_featured-image-packshot-review.jpg"
import iphone from "./asset/Apple-iPhone-15-Pro-Max_-blue-titanium_featured-image-packshot-review.jpg"
import nokia from "./asset/1110i-nokia-mobile-phone.jpg"
import google from "./asset/716n8eAia+L._AC_UF894,1000_QL80_.jpg"
import iphone12 from "./asset/iphone-12-pro-max-argent-1_1.webp"
import oppo from "./asset/41f2o1XL3VL.jpg"
import { Autoplay, Navigation } from "swiper/modules";
function App() {
  const [search, setSearch] = useState("");
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
    console.log('hit')
  };

  const handleChange = async e => {
    e.preventDefault();

    const credentials = {
      search: search,
    };
  }
  return <>
    <div>
      <nav className="bg-blue-500">
        <div className="max-w-screen-xl lg:flex items-center justify-between mx-auto p-4">
          <div className="flex w-full">
            <div className="flex items-center space-x-3 rtl:space-x-reverse">
            <div className="flex flex-row gap-1 text-2xl text-white">
              <FaShopware className="w-8 h-8" />
              <span className="hidden lg:block">Shopware</span>
            </div>
          </div>
          <div className="w-full">
            <form className="w-full flex justify-center items-start" onChange={handleChange}>
              <div className="lg:w-8/12 flex justify-between items-center gap-1">
                <input type="text" name="" value={search} onChange={e => setSearch(e.target.value)} className="w-full outline-none p-1 bg-transparent border-b text-white" />
                <button type="submit" className="px-1"><FaSearch className="text-white"/></button>
              </div>
            </form>
          </div>
          <button type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm md:hidden focus:outline-none focus:ring-gray-200 dark:text-gray-700 dark:focus:ring-gray-600" data-collapse-toggle="navbar-dropdown" aria-controls="navbar-dropdown" aria-expanded="false">
            <FaAlignRight className="w-40 h-40 text-white" onClick={handleToggle} />
          </button>
          </div>
          <div className={`md:block md:w-auto z-50 ${toggle ? "w-full bg-blue-500 left-0 transition-all duration ease-in-out" : "hidden"}`} id="navbar-dropdown">
            <ul className="flex flex-col lg:justify-center lg:items-center font-medium p-4 md:p-0 mt-4 border-gray-100 rounded-lg lg:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
              <li>
                <a href="#!" className="block lg:border-none border-b lg:py-2 py-4 px-3 text-white lg:bg-blue-700 rounded md:bg-transparent md:p-0 md:dark:bg-transparent" aria-current="page">Home</a>
              </li>
              <li>
                <a href="#!" className="block lg:border-none border-b lg:py-2 py-4 px-3 text-white lg:bg-blue-700 rounded md:bg-transparent md:p-0 md:dark:bg-transparent" aria-current="page">About</a>
              </li>
              <li>
                <a href="#!" className="block lg:border-none border-b lg:py-2 py-4 px-3 text-white lg:bg-blue-700 rounded md:bg-transparent md:p-0 md:dark:bg-transparent" aria-current="page">Services</a>
              </li>
              <li>
                <a href="#!" className="block lg:border-none border-b lg:py-2 py-4 px-3 text-white lg:bg-blue-700 rounded md:bg-transparent md:p-0 md:dark:bg-transparent" aria-current="page">Contact</a>
              </li>
              <li>
                <a href="#!" className="relative block lg:border-none border-b lg:py-2 py-4 px-3 text-white lg:bg-blue-700 rounded md:bg-transparent md:p-0 md:dark:bg-transparent" aria-current="page"> <FaShoppingCart className="w-5 h-5" /> <span className="absolute lg:left-6 left-8 bottom-7 lg:bottom-5 bg-red-600 text-white rounded-full">0</span> </a>
              </li>
              <li>
                <a href="#!" className="relative block lg:border-none border-b lg:py-2 py-4 px-3 text-white lg:bg-blue-700 rounded md:bg-transparent md:p-0 md:dark:bg-transparent" aria-current="page"> <FaHeart className="w-5 h-5" /> <span className="absolute lg:left-6 left-8 bottom-7 lg:bottom-5 bg-red-600 text-white rounded-full">0</span> </a>
              </li>
              <li>
                <a href="#!" className="relative block lg:border-none border-b lg:py-2 py-4 px-3 text-white lg:bg-blue-700 rounded md:bg-transparent md:p-0 md:dark:bg-transparent" aria-current="page"> <FaRegUserCircle className="w-5 h-5" /> </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="w-full lg:py-4">
        <div className="flex lg:flex-row flex-col gap-2">
          <div className="lg:w-1/2 w-full">
            <Swiper
              modules={[Autoplay, Navigation]}
              spaceBetween={50}
              slidesPerView={1}
              onSlideChange={()=>{console.log()}}
              onSwiper={('')}
              autoplay
              navigation={true}
              pagination={{
                clickable: true,
               }}
              loop={true}
            >
              <SwiperSlide>
                <img src={banner} alt="" className="object-cover"/>
              </SwiperSlide>
              <SwiperSlide>
                <img src={banner2} alt="" className="object-cover"/>
              </SwiperSlide>
              <SwiperSlide>
                <img src={banner3} alt="" className="object-cover"/>
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="lg:w-1/2 w-full grid lg:grid-cols-4 grid-cols-2 gap-3">
            <div className="relative p-2 hover:shadow-lg h-full object-cover overflow-hidden cursor-pointer">
              <div className="absolute top-0 right-0 bg-red-400 text-white rounded-bl-2xl text-sm px-3">
                -50% Off
              </div>
                <img src={bluetooth} alt=""  className="p-5 hover:scale-105"/>
                <p className="text-blue-400 hover:text-blue-600">Amplify Oasis Series Portable Bluetooth Speaker</p>
              </div>
              <div className="relative p-2 hover:shadow-lg h-full object-cover overflow-hidden cursor-pointer">
                <img src={airpods} alt=""  className="p-5 hover:scale-105" />
                <p className="text-blue-400 hover:text-blue-600">Apple AirPods Pro 3</p>
              </div>
              <div className="relative p-2 hover:shadow-lg h-full object-cover overflow-hidden cursor-pointer">
                <img src={headphone} alt=""  className="p-5 hover:scale-105"/>
                <p className="text-blue-400 hover:text-blue-600">Inted Roar 301 Wireless Headphone</p>
              </div>
            <div className="relative p-2 hover:shadow-lg h-full object-cover overflow-hidden cursor-pointer">
              <div className="absolute top-0 right-0 bg-red-400 text-white rounded-bl-2xl text-sm px-3">
                -15% Off
              </div>
                <img src={smartwatch} alt=""  className="p-5 hover:scale-105"/>
                <p className="text-blue-400 hover:text-blue-600">Apple Watch SE 44mm</p>
              </div>
            <div className="relative p-2 hover:shadow-lg h-full object-cover overflow-hidden cursor-pointer">
              <div className="absolute top-0 right-0 bg-red-400 text-white rounded-bl-2xl text-sm px-3">
                -30% Off
              </div>
                <img src={gamingphone} alt=""  className="p-5 hover:scale-105"/>
                <p className="text-blue-400 hover:text-blue-600">Plextone Rx1 Gaming Earphone</p>
              </div>
              <div className="relative p-2 hover:shadow-lg h-full object-cover overflow-hidden cursor-pointer">
                <img src={gamingmouse} alt=""  className="p-5 hover:scale-105"/>
                <p className="text-blue-400 hover:text-blue-600">Redragon Legend Chroma M990 RGB Gaming Mouse</p>
              </div>
              <div className="relative p-2 hover:shadow-lg h-full object-cover overflow-hidden cursor-pointer">
                <img src={tripod} alt=""  className="p-5 hover:scale-105"/>
                <p className="text-blue-400 hover:text-blue-600">Ulanzi ST-27 Metal Phone Tripod Mount Clip 2476</p>
              </div>
              <div className="relative p-2 hover:shadow-lg h-full object-cover overflow-hidden cursor-pointer">
                <img src={keyboard} alt=""  className="p-5 hover:scale-105" />
                <p className="text-blue-400 hover:text-blue-600">Bluetooth Keyboard For Tablet Holder</p>
              </div>
          </div>
        </div>
      </div>
      {/* <div>
        <div className="flex flex-row justify-end items-center text-right px-3">
          <p>All List</p> <FaAngleRight className="mx-2 bg-gray-700 rounded-full text-white" />
        </div>
        <div className="w-full border border-black">
        <Swiper
              modules={[Autoplay, Navigation]}
              slidesPerView={5}
              onSlideChange={()=>{console.log()}}
              onSwiper={('')}
            autoplay={{ delay: 2000 }}
            onAutoplayPause
              navigation={true}
              pagination={{
                clickable: true,
               }}
              loop={true}
            >
              <SwiperSlide>
                <div className="w-80 h-72">
                  <img src={xiaomi} alt="" className="p-2 object-cover"/>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="w-80 h-72">
                  <img src={iphone} alt="" className="p-2 object-cover"/>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="w-80 h-72">
                  <img src={samsung} alt="" className="p-2 object-cover"/>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="w-80 h-72">
                  <img src={xiaomi} alt="" className="p-2 object-cover"/>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="w-80 h-72">
                  <img src={iphone} alt="" className="p-2 object-cover"/>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="w-80 h-72">
                  <img src={samsung} alt="" className="p-2 object-cover"/>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="w-80 h-72">
                  <img src={huawei} alt="" className="p-2 object-cover"/>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="w-80 h-72">
                  <img src={iphone} alt="" className="p-2 object-cover"/>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="w-80 h-72">
                  <img src={samsung} alt="" className="p-2 object-cover"/>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="w-80 h-72">
                  <img src={huawei} alt="" className="p-2 object-cover"/>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="w-80 h-72">
                  <img src={iphone} alt="" className="p-2 object-cover"/>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="w-80 h-72">
                  <img src={samsung} alt="" className="p-2 object-cover"/>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="w-80 h-72">
                  <img src={huawei} alt="" className="p-2 object-cover"/>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="w-80 h-72">
                  <img src={vivo} alt="" className="p-2 object-cover"/>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="w-80 h-72">
                  <img src={iphone} alt="" className="p-2 object-cover"/>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="w-80 h-72">
                  <img src={huawei} alt="" className="p-2 object-cover"/>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="w-80 h-72">
                  <img src={huawei} alt="" className="p-2 object-cover"/>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="w-80 h-72">
                  <img src={iphone} alt="" className="p-2 object-cover"/>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="w-80 h-72">
                  <img src={huawei} alt="" className="p-2 object-cover"/>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="w-80 h-72">
                  <img src={huawei} alt="" className="p-2 object-cover"/>
                </div>
              </SwiperSlide>
            </Swiper>
      </div>
      </div> */}
      <div className="max-w-screen-xl mx-auto">
        <div className="flex flex-row gap-2">
          <div className="w-3/12 hidden lg:block">
            <h4 className="p-2 rounded-b-xl bg-blue-700">Your Choice</h4>
            <div className="mt-3 shadow-md">
              <h4 className="px-3">Brands</h4>
              <div className=" bg-slate-200 mt-3">
                <form>
                  <ul className="max-w-md divide-y divide-gray-200 dark:divide-gray-400">
                    <li className="flex flex-row justify-between items-center px-3">
                      <label htmlFor="apple" className="cursor-pointer">Apple</label>
                      <input type="checkbox" name="" id="apple" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required />
                  </li>
                    <li className="flex flex-row justify-between items-center px-3">
                      <label htmlFor="samsung" className="cursor-pointer">Samsung</label>
                      <input type="checkbox" name="" id="samsung" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required />
                  </li>
                    <li className="flex flex-row justify-between items-center px-3">
                      <label htmlFor="huawei" className="cursor-pointer">Huawei</label>
                      <input type="checkbox" name="" id="huawei" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required />
                  </li>
                    <li className="flex flex-row justify-between items-center px-3">
                      <label htmlFor="nokia" className="cursor-pointer">Nokia</label>
                      <input type="checkbox" name="" id="nokia" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required />
                  </li>
                    <li className="flex flex-row justify-between items-center px-3">
                      <label htmlFor="xiaomi" className="cursor-pointer">Xiaomi</label>
                      <input type="checkbox" name="" id="xiaomi" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required />
                  </li>
                    <li className="flex flex-row justify-between items-center px-3">
                      <label htmlFor="google" className="cursor-pointer">Google Pixel</label>
                      <input type="checkbox" name="" id="google" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required />
                  </li>
                    <li className="flex flex-row justify-between items-center px-3">
                      <label htmlFor="vivo" className="cursor-pointer">Vivo</label>
                      <input type="checkbox" name="" id="vivo" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required />
                  </li>
                    <li className="flex flex-row justify-between items-center px-3">
                      <label htmlFor="oppo" className="cursor-pointer">Oppo</label>
                      <input type="checkbox" name="" id="oppo" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required />
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
                      <label htmlFor="airpods" className="cursor-pointer">Air Pods</label>
                      <input type="checkbox" name="" id="airpods" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required />
                  </li>
                    <li className="flex flex-row justify-between items-center px-3">
                      <label htmlFor="smart_watch" className="cursor-pointer">Smart Watch</label>
                      <input type="checkbox" name="" id="smart_watch" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required />
                  </li>
                    <li className="flex flex-row justify-between items-center px-3">
                      <label htmlFor="bluetooth_speaker" className="cursor-pointer">Bluetooth Speaker</label>
                      <input type="checkbox" name="" id="bluetooth_speaker" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required />
                  </li>
                    <li className="flex flex-row justify-between items-center px-3">
                      <label htmlFor="powerbank" className="cursor-pointer">Power Bank</label>
                      <input type="checkbox" name="" id="powerbank" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required />
                  </li>
                    <li className="flex flex-row justify-between items-center px-3">
                      <label htmlFor="tripod" className="cursor-pointer">Mobile/Tablet Tripod</label>
                      <input type="checkbox" name="" id="tripod" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required />
                  </li>
                    <li className="flex flex-row justify-between items-center px-3">
                      <label htmlFor="keyboard" className="cursor-pointer">Mobile/Tablet Keyboard</label>
                      <input type="checkbox" name="" id="keyboard" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required />
                  </li>
                    <li className="flex flex-row justify-between items-center px-3">
                      <label htmlFor="stabilizer" className="cursor-pointer">Gimbal Stabilizer</label>
                      <input type="checkbox" name="" id="stabilizer" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required />
                  </li>
                </ul>
                </form>
              </div>
            </div>
        </div>
        <div className="lg:w-9/12 bg-slate-200">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-2">
            <div className="flex flex-col shadow-lg">
              <div className="lg:h-80 overflow-hidden">
                <img src={huawei} alt="" className="object-fit w-full lg:h-full hover:scale-105 transition duration-400 ease-in-out" />
              </div>
              <div className="px-2 py-3 bg-gray-300 w-full">
                <h4 className="lg:text-xl text-blue-600 lg:font-semibold">Huawei P50 pro <sup className="bg-green-100 text-green-800 text-xs font-medium me-2 lg:px-2.5 lg:py-0.5 rounded dark:bg-green-900 dark:text-green-300">New</sup></h4>
                <div className="text-xs">Color: Black, White</div>
                <span className="lg:text-2xl text-red-500">Ks 450,000</span>
                <small className="text-red-400 line-through ml-2">ks10000</small>
              </div>
            </div>
              <div className="flex flex-col justify-center items-center shadow-lg transition-all duration-100 ease-in-out">
                <div className="lg:h-80 overflow-hidden">
                  <img src={samsung} alt="" className="object-fit w-full lg:h-full hover:scale-105 transition duration-400 ease-in-out" />
                </div>
              <div className="px-2 py-3 bg-gray-300 w-full">
                <h4 className="lg:text-xl text-blue-600 lg:font-semibold">Samsung S24 Ultra <sup className="bg-red-100 text-red-800 text-xs font-medium me-2 lg:px-2.5 lg:py-0.5 rounded dark:bg-red-900 dark:text-red-300">Second</sup></h4>
                <div className="text-xs">Color: Black, Silver</div>
                <span className="lg:text-2xl text-red-500">Ks 450,000</span>
                <small className="text-red-400 line-through ml-2">ks10000</small>
              </div>
            </div>
              <div className="flex flex-col shadow-lg transition-all duration-100 ease-in-out">
                <div className="lg:h-80 overflow-hidden">
                  <img src={xiaomi} alt="" className="object-fit w-full lg:h-full hover:scale-105 transition duration-400 ease-in-out" />
                </div>
              <div className="px-2 py-3 bg-gray-300 w-full">
                <h4 className="lg:text-xl text-blue-600 lg:font-semibold">Xiaomi 14 Ultra 5G <sup className="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">New</sup></h4>
                <div className="text-xs">Color: Titanium Gray</div>
                <span className="lg:text-2xl text-red-500">Ks 450,000</span>
                <small className="text-red-400 line-through ml-2">ks10000</small>
              </div>
            </div>
            <div className="flex flex-col shadow- transition-all duration-100 ease-in-outlg">
              <div className="lg:h-80 overflow-hidden">
                <img src={vivo} alt="" className="object-fit w-full lg:h-full hover:scale-105 transition duration-400 ease-in-out" />
              </div>
              <div className="px-2 py-3 bg-gray-300 w-full">
                <h4 className="lg:text-xl text-blue-600 lg:font-semibold">Vivo x100 Pro Plus <sup className="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">New</sup></h4>
                <div className="text-xs">Color: Blace, White, Pink</div>
                <span className="lg:text-2xl text-red-500">Ks 450,000</span>
                <small className="text-red-400 line-through ml-2">ks10000</small>
              </div>
            </div>
            <div className="flex flex-col shadow-lg transition-all duration-100 ease-in-out">
              <div className="lg:h-80 overflow-hidden">
                <img src={iphone} alt="" className="object-fit w-full lg:h-full hover:scale-105 transition duration-400 ease-in-out" />
              </div>
              <div className="px-2 py-3 bg-gray-300 w-full">
                <h4 className="lg:text-xl text-blue-600 lg:font-semibold">Apple iPhone 15 Pro Max <sup className="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">New</sup></h4>
                <div className="text-xs">Color: Blace, White, Pink</div>
                <span className="lg:text-2xl text-red-500">Ks 450,000</span>
                <small className="text-red-400 line-through ml-2">ks10000</small>
              </div>
            </div>
            <div className="flex flex-col shadow-lg transition-all duration-100 ease-in-outg">
              <div className="lg:h-80 overflow-hidden">
                <img src={nokia} alt="" className="object-fit w-full lg:h-full hover:scale-105 transition duration-400 ease-in-out" />
              </div>
              <div className="px-2 py-3 bg-gray-300 w-full">
                <h4 className="lg:text-xl text-blue-600 lg:font-semibold">1110i Blue White Nokia <sup className="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">Second</sup></h4>
                <div className="text-xs">Color: Gray</div>
                <span className="lg:text-2xl text-red-500">Ks 450,000</span>
                <small className="text-red-400 line-through ml-2">ks10000</small>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center shadow-lg">
              <div className="lg:h-80 overflow-hidden">
                <img src={oppo} alt="" className="object-fit w-full lg:-full hover:scale-105 transition duration-400 ease-in-out" />
              </div>
              <div className="px-2 py-3 bg-gray-300 w-full">
                <h4 className="lg:text-xl text-blue-600 lg:font-semibold">OPPO Reno6 5G <sup className="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">Second</sup></h4>
                <div className="text-xs">Color: Aurora</div>
                <span className="lg:text-2xl text-red-500">Ks 450,000</span>
                <small className="text-red-400 line-through ml-2">ks10000</small>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center shadow-lg">
              <div className="lg:h-80 overflow-hidden">
                <img src={google} alt="" className="object-fit w-full lg:h-full hover:scale-105 transition duration-400 ease-in-out" />
              </div>
              <div className="px-2 py-3 bg-gray-300 w-full">
                <h4 className="lg:text-xl text-blue-600 lg:font-semibold">Google Pixel 6 Pro <sup className="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">Second</sup></h4>
                <div className="text-xs">Color: Aurora</div>
                <span className="lg:text-2xl text-red-500">Ks 450,000</span>
                <small className="text-red-400 line-through ml-2">ks10000</small>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center shadow-lg">
              <div className="lg:h-80 overflow-hidden">
                <img src={iphone12} alt="" className="object-fit w-full lg:h-full hover:scale-105 transition duration-400 ease-in-out" />
              </div>
              <div className="px-2 py-3 bg-gray-300 w-full">
                <h4 className="lg:text-xl text-blue-600 lg:font-semibold">iPhone 12 Pro Max <sup className="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">Second</sup></h4>
                <div className="text-xs">Color: Aurora</div>
                <span className="lg:text-2xl text-red-500">Ks 450,000</span>
                <small className="text-red-400 line-through ml-2">ks10000</small>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center my-5">
              <div className="flex flex-row gap-2">
                <span className="p-1 cursor-pointer">Prev</span>
              <span className="bg-orange-300 w-8 h-8 p-1 rounded-full text-center hover:bg-orange-400 cursor-pointer">1</span>
              <span className="bg-orange-300 w-8 h-8 p-1 rounded-full text-center hover:bg-orange-400 cursor-pointer">2</span>
              <span className="bg-orange-300 w-8 h-8 p-1 rounded-full text-center hover:bg-orange-400 cursor-pointer">3</span>
              <span className="bg-orange-300 w-8 h-8 p-1 rounded-full text-center hover:bg-orange-400 cursor-pointer">4</span>
              <span className="bg-orange-300 w-8 h-8 p-1 rounded-full text-center hover:bg-orange-400 cursor-pointer">5</span>
              <span className="p-1 cursor-pointer">Next</span>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  </>
}

export default App;
