import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return <div className="bg-slate-100">
      <Navbar />
      <div className="h-auto overflow-hidden">
        <Outlet />
      </div>
      <Footer />
    </div>;
}
