import React, { useState } from "react";
import Google from "../asset/google.png";
import Facebook from "../asset/facebook.png";
import Apple from "../asset/apple.png";
import PayPal from "../asset/paypal.png";
import QRCode from "../asset/qr_cod.png";
import { Link } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";

export default function Login() {
  const [activeTab, setActiveTab] = useState("login");

  const handleTabClick = tab => {
    setActiveTab(tab);
  };

  return (
    <div className="max-w-screen-xl lg:h-screen flex justify-center mx-auto lg:px-0 px-2 overflow-hidden">
      <div className="lg:grid grid-cols-2 gap-3 my-10">
        <div className="bg-green-300 p-5 rounded-md">
          <div>
            <ul
              className="mb-5 flex list-none flex-row flex-wrap border-b-0 ps-0"
              role="tablist"
            >
              <li role="presentation" className="flex-grow basis-0 text-center">
                <button
                  className={`my-2 block border-x-0 border-b-2 border-t-0 px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight focus:outline-none ${activeTab ===
                  "login"
                    ? "border-primary text-primary"
                    : "border-transparent hover:border-primary"}`}
                  onClick={() => handleTabClick("login")}
                  role="tab"
                  aria-selected={activeTab === "login"}
                >
                  Login
                </button>
              </li>
              <li role="presentation" className="flex-grow basis-0 text-center">
                <button
                  className={`my-2 block border-x-0 border-b-2 border-t-0 px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight focus:outline-none ${activeTab ===
                  "register"
                    ? "border-primary text-primary"
                    : "border-transparent hover:border-primary"}`}
                  onClick={() => handleTabClick("register")}
                  role="tab"
                  aria-selected={activeTab === "register"}
                >
                  Register
                </button>
              </li>
            </ul>
          </div>
          <div>
            {activeTab === "login" &&
              <div id="tabs-login" role="tabpanel">
                {/* Login Form */}
                <form action="">
                  <div className="flex flex-col gap-1 mb-3">
                    <label
                      htmlFor="email"
                      className="block mt-2 tex-sm font-medium"
                    >
                      Email
                    </label>
                    <div className="flex items-center relative">
                      <input
                        type="text"
                        id="email"
                        className="rounded-none rounded-e-lg p-2 bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 block flex-1 min-w-0 w-full focus:outline-none"
                        placeholder="Email"
                      />
                      <Link className="inline-flex items-center justify-center text-sm text-gray-600 font-medium absolute right-2">
                        Get OTP
                      </Link>
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="otp"
                      className="block mt-2 tex-sm font-medium"
                    >
                      Receive your OTP in your email.
                    </label>
                    <div className="flex">
                      <span className="inline-flex items-center px-3 text-sm text-gray-900 font-medium bg-gray-200 border border-e-0 border-gray-300 rounded-s-md">
                        OTP
                      </span>
                      <input
                        type="text"
                        id="otp"
                        className="rounded-none p-2 rounded-e-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 block flex-1 min-w-0 w-full text-sm focus:outline-none"
                        placeholder=""
                      />
                    </div>
                  </div>
                  <div className="flex items-center gap-2 my-2">
                    <input
                      type="checkbox"
                      className="w-5 h-5 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300"
                      id="check"
                    />
                    <label htmlFor="check" className="text-sm">
                      Join our mailing list: Get updates, Discount, Hot new
                      items, Gift coupon and more.
                    </label>
                  </div>
                  <div className="text-center mt-3">
                    <button
                      type="button"
                      className="bg-blue-500 focus:bg-blue-400 rounded-md p-2 text-white"
                    >
                      Login
                    </button>
                  </div>
                  <div className="my-5">
                    <div className="font-bold">Login with Social Accounts.</div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center my-3 gap-2">
                        <div className="w-7">
                          <img
                            src={Google}
                            alt="google"
                            className="object-cover"
                          />
                        </div>
                        <div className="w-7">
                          <img
                            src={Facebook}
                            alt="facebook"
                            className="objective-cover"
                          />
                        </div>
                        <div className="w-8">
                          <img
                            src={Apple}
                            alt="apple"
                            className="object-cover"
                          />
                        </div>
                        <div className="w-7">
                          <img
                            src={PayPal}
                            alt="paypal"
                            className="object-cover"
                          />
                        </div>
                      </div>
                      <div>
                        <Link to="#!" className="font-medium">
                          Forgot Password?
                        </Link>
                      </div>
                    </div>
                  </div>
                </form>
              </div>}
            {activeTab === "register" &&
              <div id="tabs-register" role="tabpanel">
                {/* Register Form */}
                <form action="">
                  <div className="flex flex-col gap-1 mb-3">
                    <label
                      htmlFor="username"
                      className="block mt-2 tex-sm font-medium"
                    >
                      User Name
                    </label>
                    <input
                      type="text"
                      id="username"
                      placeholder="username"
                      required
                      className="rounded-md p-2 focus:outline-none"
                    />
                  </div>
                  <div className="flex flex-col gap-1 mb-3">
                    <label
                      htmlFor="email"
                      className="block mt-2 tex-sm font-medium"
                    >
                      Email
                    </label>
                    <div className="flex items-center relative">
                      <input
                        type="text"
                        id="email"
                        className="rounded-none rounded-e-lg p-2 bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 block flex-1 min-w-0 w-full focus:outline-none"
                        placeholder="Email"
                      />
                      <Link className="inline-flex items-center justify-center text-sm text-gray-600 font-medium absolute right-2">
                        Get OTP
                      </Link>
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="otp"
                      className="block mt-2 tex-sm font-medium"
                    >
                      Receive your OTP in your email.
                    </label>
                    <div className="flex">
                      <span className="inline-flex items-center px-3 text-sm text-gray-900 font-medium bg-gray-200 border border-e-0 border-gray-300 rounded-s-md">
                        OTP
                      </span>
                      <input
                        type="text"
                        id="otp"
                        className="rounded-none p-2 rounded-e-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 block flex-1 min-w-0 w-full text-sm focus:outline-none"
                        placeholder=""
                      />
                    </div>
                  </div>
                  <div className="text-center mt-3">
                    <button
                      type="button"
                      className="bg-blue-500 focus:bg-blue-400 rounded-md p-2 text-white"
                    >
                      Register
                    </button>
                  </div>
                  <div className="my-5">
                    <div className="font-bold">
                      Register with Social Accounts.
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center my-3 gap-2">
                        <div className="w-7">
                          <img
                            src={Google}
                            alt="google"
                            className="object-cover"
                          />
                        </div>
                        <div className="w-7">
                          <img
                            src={Facebook}
                            alt="facebook"
                            className="objective-cover"
                          />
                        </div>
                        <div className="w-8">
                          <img
                            src={Apple}
                            alt="apple"
                            className="object-cover"
                          />
                        </div>
                        <div className="w-7">
                          <img
                            src={PayPal}
                            alt="paypal"
                            className="object-cover"
                          />
                        </div>
                      </div>
                      <div>
                        <Link
                          to="#!"
                          className="font-medium"
                          onClick={() => handleTabClick("login")}
                        >
                          Already have an account?
                        </Link>
                      </div>
                    </div>
                  </div>
                </form>
              </div>}
          </div>
        </div>
        <div className="lg:px-5 px-2 lg:mt-0 mt-10">
          <div className="text-3xl font-bold text-center">Welcome!</div>
          <div className="mt-5">
            <ul>
              <li className="flex items-center gap-2 py-2 font-medium">
                <FaCheckCircle className="text-green-500" /> Over 1000+ Products
              </li>
              <li className="flex items-center gap-2 py-2 font-medium">
                <FaCheckCircle className="text-green-500" /> Delivering in 200
                Cities
              </li>
              <li className="flex items-center gap-2 py-2 font-medium">
                <FaCheckCircle className="text-green-500" /> Over 1500 Best
                Reviews
              </li>
              <li className="flex items-center gap-2 py-2 font-medium">
                <FaCheckCircle className="text-green-500" /> Super Fast
                Delivering
              </li>
              <li className="flex items-center gap-2 py-2 font-medium">
                <FaCheckCircle className="text-green-500" /> Fast and Secure
                Services
              </li>
              <li className="flex items-center gap-2 py-2 font-medium">
                <FaCheckCircle className="text-green-500" /> Best Service Award
                in 2022
              </li>
            </ul>
          </div>
          <div className="flex justify-center gap-3 mt-5">
            <div className="w-40">
              <img src={QRCode} alt="" />
            </div>
            <div>
              <div className="lg:text-2xl text-xl">Don't have our App?</div>
              <div>Install Now.</div>
              <div className="lg:text-xl mt-3">Scan the QR code.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
