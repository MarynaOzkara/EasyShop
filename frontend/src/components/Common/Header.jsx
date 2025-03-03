import React from "react";
import TopBar from "../Layout/TopBar";
import NavBar from "../Layout/NavBar";

const Header = () => {
  return (
    <header className="border-b border-gray-200">
      {/* Topbar */}
      <TopBar />
      {/* Navbar */}
      <NavBar />
      {/* Cart Drawer */}
    </header>
  );
};

export default Header;
