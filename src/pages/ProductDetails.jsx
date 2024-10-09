import React, { useState } from "react";
import Iphone from "../asset/iphone-12-pro-max-argent-1_1.webp";
import Huawei from "../asset/huawei-p50-pro-black.jpg";
import Samsung from "../asset/S24_Ultra.jpg";
import Vivo from "../asset/Vivo-X100-Pro_featured-image-packshot-review.jpg";
import { FaStar, FaStarHalf } from "react-icons/fa";
import { Link } from "react-router-dom";
import RelatedProduct from "../components/RelatedProduct";

export default function ProductDetails() {
  const [mainImage, setMainImage] = useState(Iphone);
  const handleThumbnailClick = image => {
    setMainImage(image);
  };

  const [quantity, setQuantity] = useState(1);

  const handleDecrement = () => {
    setQuantity(prev => Math.max(prev - 1, 1));
  };

  const handleIncrement = () => {
    setQuantity(prev => Math.min(prev + 1, 50));
  };

  const handleChange = event => {
    const value = Math.max(1, Math.min(50, Number(event.target.value)));
    setQuantity(value);
  };
  return <div className="lg:px-0 px-2">
      <div className="py-5">
        <div className="p-2 bg-blue-50">
          Products / Apple / Phone / iPhone 15, iPhone Pro Max
        </div>
      </div>
      <div>
        <div className="lg:grid grid-cols-2 gap-3">
          {/* phone condition swiper start  */}
          <div>
            {/* main swiper */}
            <div className="flex flex-col justify-center items-center bg-white">
              <div className="w-96 h-96">
                <img src={mainImage} alt="iPhone 15" className="object-fit" />
              </div>
            </div>
            {/* main swiper  */}
            {/* thumbs swiper  */}
            <div className="flex mt-2">
              <div className="w-40 cursor-pointer">
                <img src={Huawei} alt="Huawei" onClick={() => handleThumbnailClick(Huawei)} />
              </div>
              <div className="w-40 cursor-pointer">
                <img src={Iphone} alt="iPhone" onClick={() => handleThumbnailClick(Iphone)} />
              </div>
              <div className="w-40 cursor-pointer">
                <img src={Samsung} alt="Samsung" onClick={() => handleThumbnailClick(Samsung)} />
              </div>
              <div className="w-40 cursor-pointer">
                <img src={Vivo} alt="Vivo" onClick={() => handleThumbnailClick(Vivo)} />
              </div>
            </div>
            {/* thumbs swiper  */}
          </div>
          {/* phone condition swiper end  */}
          <div>
            <div className="text-3xl">Product Information</div>
            <div className="my-4">
              <div className="text-xl font-bold">iPhone 15 Pro</div>
              <div>
                <ul>
                  <li>
                    Storage : <span className="font-bold">256GB</span>
                  </li>
                  <li>
                    Color : <span className="font-bold">White Titanium</span>
                  </li>
                  <li>
                    Warranty : <span className="font-bold">1 Year</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="my-5">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia
                temporibus sapiente ipsa adipisci, illum, officia
                exercitationem libero repellat ea a eum expedita voluptatem
                harum necessitatibus porro. Magnam ducimus voluptatibus
                quaerat nobis illum, earum deleniti perferendis, mollitia,
                aspernatur blanditiis unde voluptates?
              </p>
            </div>
            <div className="mt-5 mb-3">
              <Link to="" className="flex text-red-500">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalf />
                <FaStarHalf />
              </Link>
            </div>
            <div>
              <form className="">
                <label htmlFor="quantity-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Choose quantity:
                </label>
                <div className="relative flex items-center max-w-[8rem]">
                  <button onChange="" type="button" id="decrement-button" data-input-counter-decrement="quantity-input" className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-11" onClick={handleDecrement}>
                    <svg className="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h16" />
                    </svg>
                  </button>
                  <input type="text" id="quantity-input" data-input-counter data-input-counter-min="1" data-input-counter-max="50" aria-describedby="helper-text-explanation" className="bg-gray-50 border-x-0 border-gray-300 h-11 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-b border-whitelue-500 block w-full py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-b border-whitelue-500" placeholder="1" required value={quantity} onChange={handleChange} />
                  <button type="button" onChange="" id="increment-button" data-input-counter-increment="quantity-input" className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-11" onClick={handleIncrement}>
                    <svg className="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16" />
                    </svg>
                  </button>
                </div>
                <p id="helper-text-explanation" className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                  Please select the number of items.
                </p>
              </form>
            </div>
            <div className="flex my-3 gap-3">
              <div>
                <button type="button" className="p-2 bg-yellow-300 focus:bg-yellow-200 rounded-lg">
                  Add to cart
                </button>
              </div>
              <div className="mt-2">
                <Link to="/shopping_app/my-cart" className="p-2 bg-red-500 rounded-lg text-white focus:bg-red-400">
                  Check out
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:grid grid-cols-2 gap-3">
          <div className="w-full mt-5 mb-10">
            <div className="text-2xl">Product Features</div>
            <div className="relative overflow-x-auto my-3">
              <table className="w-full text-sm text-left rtl:text-right">
                <tbody>
                  <tr className="bg-orange-100 border-b border-white">
                    <th scope="row" className="px-2 py-3 font-medium text-gray-900">
                      Screen Size
                    </th>
                    <td className="px-2 py-4 bg-orange-50">6.1 inch</td>
                  </tr>
                  <tr className="bg-orange-100 border-b border-white">
                    <th scope="row" className="px-2 py-3 font-medium text-gray-900">
                      Chip
                    </th>
                    <td className="px-2 py-4 bg-orange-50">A17 Pro chip</td>
                  </tr>
                  <tr className="bg-orange-100 border-b border-white">
                    <th scope="row" className="px-2 py-3 font-medium">
                      Display
                    </th>
                    <td className="px-2 py-4 bg-orange-50">
                      Super Retina XDR display ProMotion technology Always-On
                      display
                    </td>
                  </tr>
                  <tr className="bg-orange-100 border-b border-white">
                    <th scope="row" className="px-2 py-3 font-medium">
                      Capacity
                    </th>
                    <td className="px-2 py-4 bg-orange-50">512GB</td>
                  </tr>
                  <tr className="bg-orange-100 border-b border-white">
                    <th scope="row" className="px-2 py-3 font-medium">
                      Front Camera
                    </th>
                    <td className="px-2 py-4 bg-orange-50">
                      TrueDepth camera 12MP
                    </td>
                  </tr>
                  <tr className="bg-orange-100 border-b border-white">
                    <th scope="row" className="px-2 py-3 font-medium">
                      Back Camera
                    </th>
                    <td className="px-2 py-4 bg-orange-50">
                      Pro camera system (48MP Main, 12MP Ultra Wide, and 12MP
                      3x Telephoto)
                    </td>
                  </tr>
                  <tr className="bg-orange-100 border-b border-white">
                    <th scope="row" className="px-2 py-3 font-medium">
                      Connection ports
                    </th>
                    <td className="px-2 py-4 bg-orange-50">USB-C</td>
                  </tr>
                  <tr className="bg-orange-100 border-b border-white">
                    <th scope="row" className="px-2 py-3 font-medium">
                      SIM Card
                    </th>
                    <td className="px-2 py-4 bg-orange-50">
                      Dual SIM (nano-SIM and eSIM)
                    </td>
                  </tr>
                  <tr className="bg-orange-100 border-b border-white">
                    <th scope="row" className="px-2 py-3 font-medium">
                      Water resitance
                    </th>
                    <td className="px-2 py-4 bg-orange-50">
                      Depth of 6 meter for up to 30 mins
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="lg:p-5">
            <div className="text-2xl text-center p-3">
              Write a product review.
            </div>
            <div className="w-full">
              <form action="">
                <div className="w-full p-2">
                  <label htmlFor="rating" className="py-2">
                    What's your rating?
                  </label>
                  <input type="number" min="1" max="5" id="rating" className="p-2 border-2 w-full focus:outline-none" onchange="" placeholder="1 to 5" />
                </div>
                <div className="lg:flex gap-2 p-2">
                  <div className="w-full lg:mt-0 mt-2">
                    <label htmlFor="name" className="py-2">
                      Name
                    </label>
                    <input type="text" placeholder="Name" id="name" className="p-2 border-2 w-full focus:outline-none" onchange="" />
                  </div>
                  <div className="w-full lg:mt-0 mt-2">
                    <label htmlFor="email" className="py-2">
                      Email
                    </label>
                    <input type="text" placeholder="Email" className="p-2 border-2 w-full focus:outline-none" onchange="" id="email" />
                  </div>
                </div>
                <div className="w-full p-2">
                  <label htmlFor="review" className="py-2">
                    Write the review.
                  </label>
                  <div>
                    <textarea name="" rows="5" id="review" className="p-2 border-2 w-full focus:outline-none" onchange="" />
                  </div>
                </div>
                <div className="w-full text-center">
                  <button type="button" className="p-2 bg-blue-500 rounded-lg text-white">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="my-5">
          <div className="text-2xl text-center font-bold">
            Related Accessories
          </div>
          <RelatedProduct />
        </div>
      </div>
    </div>;
}
