import React, { useState } from "react";
import Sidebar from './components/Sidebar'
import HeaderCarousel from './components/HeaderCarousel';
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
function App() {
  return <>
    <div>
      <Navbar />
      <HeaderCarousel />
      <div className="max-w-screen-xl mx-auto bg-slate-100">
        <div className="flex flex-row gap-2">
        {/* Sidebar start */}
          <Sidebar />
          {/* Sidebar end  */}
          {/* main section start  */}
          <Home />
          {/* main section end  */}
        </div>
      </div>
      {/* footer secion start  */}
      <Footer />
      {/* footer section end  */}
    </div>
  </>
}

export default App;
