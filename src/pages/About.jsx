import React from "react";
import Mobile from "../asset/mobile.jpg";
import Samsung from "../asset/S24_Ultra.jpg";
import {
  FaHeadset,
  FaUserCog,
  FaTruck,
  FaTelegramPlane,
  FaDollarSign
} from "react-icons/fa";

export default function About() {
  return <div className="max-w-screen-xl mx-auto lg:px-0 px-2">
      <div className="border-b">
        <div className="w-full lg:h-80 overflow-hidden">
          <img src={Mobile} alt="Mobile phone" className="object-cover" />
        </div>
        <div className="lg:my-5 my-3">
          <div className="text-xl lg:text-3xl text-blue-400 font-medium">
            About Us
          </div>
          <div className="lg:my-5 my-3">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Praesentium incidunt repellendus, quae impedit fugit optio
              voluptatum ipsum blanditiis alias sed distinctio vitae adipisci,
              velit doloremque mollitia eius soluta. Quis eaque dolor iste,
              beatae atque aperiam, molestias fuga nemo excepturi vero eius
              nulla a nisi quaerat. Aliquid eius voluptas quas quae quo!
              Dicta, nisi labore harum adipisci illo aliquam sint dolorem
              repellat quod iste saepe voluptatibus quam quasi iusto,
              voluptatem odio quae, magni sapiente soluta similique ullam. Eos
              porro voluptatum magnam.
            </p>
          </div>
        </div>
        <div className="lg:grid grid-cols-2 gap-3 my-8">
          <div className="lg:my-0 my-3">
            <div className="text-xl lg:text-3xl font-medium text-blue-400">
              What's our service?
            </div>
            <div className="my-5">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
                totam quis eligendi libero ipsam quae repellat asperiores vel
                eaque aliquam, neque earum sapiente magnam, atque ex veritatis
                eius? Sit pariatur harum officiis natus autem error odit
                dolores tenetur eaque cum!
              </p>
            </div>
            <div className="grid grid-cols-4 gap-3 lg:my-10">
              <div className="flex flex-col justify-center items-center">
                <FaHeadset className="lg:text-5xl text-3xl" />
                <div>24hr Services</div>
              </div>
              <div className="flex flex-col justify-center items-center">
                <FaTruck className="lg:text-5xl text-3xl" />
                <div>Fast Delivary</div>
              </div>
              <div className="flex flex-col  justify-center items-center">
                <FaUserCog className="lg:text-5xl text-3xl" />
                <div>Repair Service</div>
              </div>
              <div className="flex flex-col justify-center items-center">
                <FaDollarSign className="lg:text-5xl text-3xl" />
                <div>Shop now / Pay later</div>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col justify-center items-center">
            <div className="w-72">
              <img src={Samsung} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col justify-center items-center my-5 text-slate-600">
        <div>
          <div className="flex items-center gap-2 lg:text-2xl">
            <FaTelegramPlane />Subscribe To The Groove Newsletter
          </div>
          <div>
            Get the latest updates and insights straight to your inbox
          </div>
        </div>
        <div className="lg:w-1/3 w-full mt-3 relative overflow-hidden">
          <input type="text" placeholder="Enter Your Email" className="p-3 w-full border border-zinc-950 focus:outline-none" />
          <span className="absolute right-0 bg-slate-300 h-full p-3 border border-t-zinc-950 border-e-zinc-950 border-b-zinc-950 text-black font-medium">
            <button type="button">Subscribe</button>
          </span>
        </div>
      </div>
    </div>;
}
