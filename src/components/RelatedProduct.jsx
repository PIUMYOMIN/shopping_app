import React from "react";
import AirPods from "../asset/AirPod Pro.png";
import MacCase from "../asset/mac_book_case.png";
import MagicKeyboard from "../asset/magic_keyboard.png";
import ApplePencil from "../asset/apple_pencil.png";
import HomePod from "../asset/HomePod.png";
import Display from "../asset/studio_display.png";
import Mouse from "../asset/magic_mouse.png";
import Keyboard from "../asset/magic_keyboard.png";
import SmartFolio from "../asset/smart_folio.png";
import { Link } from "react-router-dom";
export default function RelatedProduct() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-5 gap-3 py-5">
      <Link
        to="/product-details"
        className="flex flex-col shadow-lg bg-gray-300"
      >
        <div className="overflow-hidden lg:h-64">
          <img
            src={AirPods}
            alt=""
            className="object-fit w-full lg:h-full hover:scale-105 transition duration-400 ease-in-out"
          />
        </div>
        <div className="px-2 py-3">
          <h4 className="text-blue-600 lg:font-semibold">
            AirPods Pro (2nd generation) with MagSafe Charging Case (USB‑C)
          </h4>
        </div>
      </Link>
      <Link
        to="/product-details"
        className="flex flex-col shadow-lg bg-gray-300"
      >
        <div className="overflow-hidden lg:h-64">
          <img
            src={MacCase}
            alt=""
            className="object-fit w-full lg:h-full hover:scale-105 transition duration-400 ease-in-out"
          />
        </div>
        <div className="px-2 py-3">
          <h4 className="text-blue-600 lg:font-semibold">
            Tech21 EvoShell Case for 13" MacBook Air M2 (2022)
          </h4>
        </div>
      </Link>
      <Link
        to="/product-details"
        className="flex flex-col shadow-lg bg-gray-300"
      >
        <div className="overflow-hidden lg:h-64">
          <img
            src={MagicKeyboard}
            alt=""
            className="object-fit w-full lg:h-full hover:scale-105 transition duration-400 ease-in-out"
          />
        </div>
        <div className="px-2 py-3">
          <h4 className="text-blue-600 lg:font-semibold">
            Magic Keyboard for iPad Pro 13‑inch (M4) - White
          </h4>
        </div>
      </Link>
      <Link
        to="/product-details"
        className="flex flex-col shadow-lg bg-gray-300"
      >
        <div className="overflow-hidden lg:h-64">
          <img
            src={ApplePencil}
            alt=""
            className="object-fit w-full lg:h-full hover:scale-105 transition duration-400 ease-in-out"
          />
        </div>
        <div className="px-2 py-3">
          <h4 className="text-blue-600 lg:font-semibold">Apple Pencil Pro</h4>
        </div>
      </Link>
      <Link
        to="/product-details"
        className="flex flex-col shadow-lg bg-gray-300"
      >
        <div className="overflow-hidden lg:h-64">
          <img
            src={HomePod}
            alt=""
            className="object-fit w-full lg:h-full hover:scale-105 transition duration-400 ease-in-out"
          />
        </div>
        <div className="px-2 py-3">
          <h4 className="text-blue-600 lg:font-semibold">HomePod - Midnight</h4>
        </div>
      </Link>
      <Link
        to="/product-details"
        className="flex flex-col shadow-lg bg-gray-300"
      >
        <div className="overflow-hidden lg:h-64">
          <img
            src={Mouse}
            alt=""
            className="object-fit w-full lg:h-full hover:scale-105 transition duration-400 ease-in-out"
          />
        </div>
        <div className="px-2 py-3">
          <h4 className="text-blue-600 lg:font-semibold">Magic Mouse</h4>
        </div>
      </Link>
      <Link
        to="/product-details"
        className="flex flex-col shadow-lg bg-gray-300"
      >
        <div className="overflow-hidden lg:h-64">
          <img
            src={Display}
            alt=""
            className="object-fit w-full lg:h-full hover:scale-105 transition duration-400 ease-in-out"
          />
        </div>
        <div className="px-2 py-3">
          <h4 className="text-blue-600 lg:font-semibold">Studio Display</h4>
        </div>
      </Link>
      <Link
        to="/product-details"
        className="flex flex-col shadow-lg bg-gray-300"
      >
        <div className="overflow-hidden lg:h-64">
          <img
            src={Keyboard}
            alt=""
            className="object-fit w-full lg:h-full hover:scale-105 transition duration-400 ease-in-out"
          />
        </div>
        <div className="px-2 py-3">
          <h4 className="text-blue-600 lg:font-semibold">
            Tech21 EvoShell Case for 13" MacBook Air M2 (2022)
          </h4>
        </div>
      </Link>
      <Link
        to="/product-details"
        className="flex flex-col shadow-lg bg-gray-300"
      >
        <div className="overflow-hidden lg:h-64">
          <img
            src={SmartFolio}
            alt=""
            className="object-fit w-full lg:h-full hover:scale-105 transition duration-400 ease-in-out"
          />
        </div>
        <div className="px-2 py-3">
          <h4 className="text-blue-600 lg:font-semibold">
            Tech21 EvoShell Case for 13" MacBook Air M2 (2022)
          </h4>
        </div>
      </Link>
    </div>
  );
}
