import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  HiOutlineUser,
  HiOutlineShoppingBag,
  HiBars3BottomRight,
} from "react-icons/hi2";
import SearchBar from "../Common/SearchBar";
import CartDrawer from "./CartDrawer";
import { IoMdClose } from "react-icons/io";

const NavBar = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [navOpen, setNavOpen] = useState(false);
  const toggleCartDrawer = () => {
    setOpenDrawer(!openDrawer);
  };
  const toggleNavMob = () => {
    setNavOpen(!navOpen);
  };
  return (
    <>
      <nav className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <div>
          <Link to="/" className="text-2xl font-medium">
            EasyShop
          </Link>
        </div>
        {/* Navigation */}
        <div className="hidden md:flex space-x-6">
          <Link
            to="/collections/all"
            className="text-gray-700 hover:text-black text-sm font-medium uppercase"
          >
            men
          </Link>
          <Link
            to="#"
            className="text-gray-700 hover:text-black text-sm font-medium uppercase"
          >
            women
          </Link>
          <Link
            to="#"
            className="text-gray-700 hover:text-black text-sm font-medium uppercase"
          >
            top wear
          </Link>
          <Link
            to="#"
            className="text-gray-700 hover:text-black text-sm font-medium uppercase"
          >
            bottom wear
          </Link>
        </div>
        {/* Right Icons */}
        <div className="flex items-center space-x-4">
          <Link to="/profile" className="hover:text-black">
            <HiOutlineUser className="h-6 w-6 text-gray-700" />
          </Link>
          <button
            onClick={toggleCartDrawer}
            className="relative hover:text-black"
          >
            <HiOutlineShoppingBag className="h-6 w-6 text-gray-700" />
            <span className="absolute -top-1 bg-brand-red text-white text-xs rounded-full px-1.5 py-0.5">
              2
            </span>
          </button>
          {/* Search */}
          <div className="overflow-hidden">
            <SearchBar />
          </div>

          <button onClick={toggleNavMob} className="md:hidden">
            <HiBars3BottomRight className="h-6 w-6 text-gray-600" />
          </button>
        </div>
      </nav>
      <CartDrawer openDrawer={openDrawer} toggleCartDrawer={toggleCartDrawer} />
      {/* Mobile Navigation */}
      <div
        className={`fixed top-0 left-0 w-3/4 sm:w-1/2 md:w-1/4 h-full bg-white shadow-lg transform transition-transform duration-300 z-50 ${
          navOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button onClick={toggleNavMob}>
            <IoMdClose className="h-6 w-6 text-gray-600" />
          </button>
        </div>
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-4">Menu</h2>
          <nav className="space-y-4">
            <Link
              to="#"
              onClick={toggleNavMob}
              className="block text-gray-600 hover:text-black uppercase"
            >
              Men
            </Link>
            <Link
              to="#"
              onClick={toggleNavMob}
              className="block text-gray-600 hover:text-black uppercase"
            >
              Women
            </Link>
            <Link
              to="#"
              onClick={toggleNavMob}
              className="block text-gray-600 hover:text-black uppercase"
            >
              top wear
            </Link>
            <Link
              to="#"
              onClick={toggleNavMob}
              className="block text-gray-600 hover:text-black uppercase"
            >
              bottom wear
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
};

export default NavBar;
