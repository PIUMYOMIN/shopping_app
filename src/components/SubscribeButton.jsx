import React from "react";
import { FaRegEnvelope } from "react-icons/fa";
export default function SubscribeButton() {
  return (
    <div>
      <div className="w-full text-center p-10 bg-slate-200">
        <div>
          <div className="font-bold">Subscribe on our newsletter</div>
          <div className="text-xs">
            Get daily news on upcoming offers from many suppliers all over the
            world
          </div>
          <div className="flex justify-center items-center my-3 gap-1">
            <div className="w-72 relative">
              <input
                type="mail"
                name="email"
                placeholder="Email"
                className="py-1 pl-8 pr-2 w-full rounded-md border-slate-400 border outline-none text-slate-400"
              />
              <FaRegEnvelope className="text-xl absolute left-2 top-2 text-gray-400" />
            </div>
            <div>
              <button
                type="submit"
                className="bg-blue-400 text-white rounded-md p-1"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
