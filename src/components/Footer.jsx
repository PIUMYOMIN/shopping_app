import React from 'react'
import {FaShopware} from "react-icons/fa";

export default function Footer() {
  return (
    <div className=" bg-neutral-700">
        <div className="max-w-screen-xl mx-auto lg:flex justify-between lg:py-14 p-4 text-white">
          <div className="my-5">
            <div className="flex justify-left items-center gap-1 lg:mb-3">
              <FaShopware className="text-3xl" /> <h4 className="text-2xl">Shopware</h4>
            </div>
            <ul>
              <li>
                <a href="/shopping_app/about-us">About us</a>
              </li>
              <li>
                <a href="#!">Rules & Regulations</a>
              </li>
              <li>
                <a href="#!">Security Policy</a>
              </li>
            </ul>
          </div>
          <div className="my-5">
            <div className="flex justify-left items-center gap-1 lg:mb-3">
              <h4 className="text-2xl">Help</h4>
            </div>
            <ul>
              <li>
                <a href="#!">Questions & Answers</a>
              </li>
              <li>
                <a href="#!">Order System</a>
              </li>
              <li>
                <a href="#!">Reward System</a>
              </li>
            </ul>
          </div>
          <div className="my-5">
            <div className="flex justify-left items-center gap-1 lg:mb-3">
              <h4 className="text-2xl">Services</h4>
            </div>
            <ul>
              <li>
                <a href="#!">Payments</a>
              </li>
              <li>
                <a href="#!">Delivary</a>
              </li>
              <li>
                <a href="#!">Products</a>
              </li>
            </ul>
          </div>
          <div className="my-5">
            <div className="flex justify-left items-center gap-1 lg:mb-3">
              <h4 className="text-2xl">Contact</h4>
            </div>
            <div>
              <p>124-125 / +05 Block, </p>
              <p>Illutori, London</p>
              <p>+01 551215, +1 54515</p>
            </div>
          </div>
        </div>
        <div>
          <p className="text-center text-xs border-t border-gray-500 text-gray-400 py-1">Copyright <>&copy;</> 2024. All Rights Reserved.</p>
        </div>
      </div>
  )
}
