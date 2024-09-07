import React from "react";
import Iphone from "../asset/1617879104-w9DzEEYm.jpg";
import AirPot from "../asset/AirPod Pro.png";

export default function MyCart() {
  return (
    <div className="lg:px-0 px-2">
      <div className="py-5">
        <div className="p-2 bg-blue-50 font-semibold">My cart (2)</div>
      </div>
      <div className="lg:flex gap-3">
        <div className="flex flex-col gap-3 items-start lg:w-3/4">
          <div className="lg:flex flex-row w-full border rounded-md p-2 gap-3">
            <div className="flex justify-center items-center">
              <img src={Iphone} alt="" className="lg:w-96 w-48 object-cover" />
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
                  className="border border-gray-400 text-red-400 rounded-md py-1 px-2 hover:bg-red-400 hover:text-white"
                >
                  Remove
                </button>
                <button
                  type="button"
                  className="border border-gray-400 text-green-400 rounded-md py-1 px-2 hover:bg-green-400 hover:text-white mx-3"
                >
                  Save for later
                </button>
              </div>
            </div>
          </div>
          <div className="lg:flex flex-row w-full border rounded-md p-2 gap-3">
            <div className="flex justify-center items-center">
              <img src={AirPot} alt="" className="lg:w-96 w-48 object-cover" />
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
                  className="border border-gray-400 text-red-400 rounded-md py-1 px-2 hover:bg-red-400 hover:text-white"
                >
                  Remove
                </button>
                <button
                  type="button"
                  className="border border-gray-400 text-green-400 rounded-md py-1 px-2 hover:bg-green-400 hover:text-white mx-3"
                >
                  Save for later
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
    </div>
  );
}
