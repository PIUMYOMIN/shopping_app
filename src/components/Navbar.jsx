import React, { useState } from "react";
import {
  FaAlignRight,
  FaRegUserCircle,
  FaShoppingCart,
  FaHeart,
  FaShopware,
  FaSearch
} from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [search, setSearch] = useState("");
  const [toggle, setToggle] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const handleChange = async e => {
    e.preventDefault();
    const credentials = { search: search };
  };

  const handleMouseEnter = () => {
    setDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setDropdownVisible(false);
  };

  return <nav className="bg-blue-500">
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
                <button type="submit" className="px-1">
                  <FaSearch className="text-white" />
                </button>
              </div>
            </form>
          </div>
          <button type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm md:hidden focus:outline-none focus:ring-gray-200 dark:text-gray-700 dark:focus:ring-gray-600" data-collapse-toggle="navbar-dropdown" aria-controls="navbar-dropdown" aria-expanded="false">
            <FaAlignRight className="w-40 h-40 text-white" onClick={handleToggle} />
          </button>
        </div>
        <div className={`md:block md:w-full z-50 ${toggle ? "w-full bg-blue-500 left-0 transition-all duration ease-in-out" : "hidden"}`} id="navbar-dropdown">
          <ul className="flex flex-col lg:justify-center lg:items-center font-medium p-4 md:p-0 mt-4 border-gray-100 rounded-lg lg:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
            <li>
              <a href="/shopping_app" className="block lg:border-none border-b lg:py-2 py-4 px-3 text-white lg:bg-blue-700 rounded md:bg-transparent md:p-0 md:dark:bg-transparent" aria-current="page">
                Home
              </a>
            </li>
            <li>
              <a href="#!" className="block lg:border-none border-b lg:py-2 py-4 px-3 text-white lg:bg-blue-700 rounded md:bg-transparent md:p-0 md:dark:bg-transparent" aria-current="page">
                Mobile & Tablet
              </a>
            </li>
            <li>
              <a href="#!" className="block lg:border-none border-b lg:py-2 py-4 px-3 text-white lg:bg-blue-700 rounded md:bg-transparent md:p-0 md:dark:bg-transparent" aria-current="page">
                Accessories
              </a>
            </li>
            <li>
              <a href="#!" className="block lg:border-none border-b lg:py-2 py-4 px-3 text-white lg:bg-blue-700 rounded md:bg-transparent md:p-0 md:dark:bg-transparent" aria-current="page">
                Electronic
              </a>
            </li>
            <li>
              <Link to="/shopping_app/my-cart" className="relative block lg:border-none border-b lg:py-2 py-4 px-3 text-white lg:bg-blue-700 rounded md:bg-transparent md:p-0 md:dark:bg-transparent" aria-current="page">
                {" "}<FaShoppingCart className="w-5 h-5" /> <span className="absolute lg:left-6 left-8 bottom-7 lg:bottom-5 text-white rounded-full">
                  0
                </span>{" "}
              </Link>
            </li>
            <li>
              <Link to="#!" className="relative block lg:border-none border-b lg:py-2 py-4 px-3 text-white lg:bg-blue-700 rounded md:bg-transparent md:p-0 md:dark:bg-transparent" aria-current="page">
                {" "}<FaHeart className="w-5 h-5" /> <span className="absolute lg:left-6 left-8 bottom-7 lg:bottom-5 text-white rounded-full">
                  0
                </span>{" "}
              </Link>
            </li>
            <li>
              <div className="relative block lg:border-none border-b lg:py-2 py-4 px-3 text-white lg:flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <button type="button" className="flex rounded-full relative" id="user-menu-button" aria-expanded={dropdownVisible} data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom" onClick={() => setDropdownVisible(!dropdownVisible)}>
                  <div>
                    <FaRegUserCircle className="w-5 h-5" />
                  </div>
                </button>
                <div className={`z-50 lg:w-auto w-full text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 ${dropdownVisible ? "block" : "hidden"} lg:absolute left-1/2 lg:transform lg:-translate-x-1/2 top-full`} id="user-dropdown">
                  <div className="px-4 py-3">
                    <span className="block text-sm text-gray-900 dark:text-white">
                      Jhon Doe
                    </span>
                    <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">
                      jhondoe@gmail.com
                    </span>
                  </div>
                  <ul className="py-2" aria-labelledby="user-menu-button">
                    <li>
                      <Link to="/shopping_app/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                        Dashboard
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                        Settings
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                        Sign out
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>;
}
