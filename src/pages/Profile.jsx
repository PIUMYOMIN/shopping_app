import React from "react";

export default function Profile() {
  return (
    <div className="max-w-screen-xl mx-auto lg:px-0 px-2">
      <div>
        <div className="bg-green-100 px-3 py-8 font-medium my-5">
          Account / Profile
        </div>
        <div className="flex gap-5 lg:my-20">
          <div className="w-1/4 px-3 py-8 shadow-lg">
            <ul>
              <li className="py-3 border-b font-medium">My Profile</li>
              <li className="py-3 border-b">Manage My Account</li>
              <li className="py-3 border-b">Delivary Info</li>
              <li className="py-3 border-b">Track Order</li>
              <li className="py-3 border-b">Payment Option</li>
              <li className="py-3">Return and Cancelling</li>
            </ul>
          </div>
          <div className="w-full px-3 py-8 shadow-lg">Information</div>
        </div>
      </div>
    </div>
  );
}
