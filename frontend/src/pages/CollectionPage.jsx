import React, { useEffect, useRef, useState } from "react";
import { FaFilter } from "react-icons/fa";
import FilterSidebar from "../components/Products/FilterSidebar";
import SortOptions from "../components/Products/SortOptions";
import ProductGrid from "../components/Products/ProductGrid";

const CollectionPage = () => {
  const [products, setProducts] = useState([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const handleClickOutside = (e) => {
    // Close Sidebar if click outside
    if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
      setIsSidebarOpen(false);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    // Clean eventListener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  useEffect(() => {
    setTimeout(() => {
      const fetchProducts = [
        {
          _id: "1",
          name: "Stylish Jacket",
          price: 120,
          images: [
            {
              url: "https://picsum.photos/500/500?random=1",
              altText: "Stylish Jacket",
            },
          ],
        },
        {
          _id: "2",
          name: "Stylish Jacket",
          price: 120,
          images: [
            {
              url: "https://picsum.photos/500/500?random=2",
              altText: "Stylish Jacket",
            },
          ],
        },
        {
          _id: "3",
          name: "Stylish Jacket",
          price: 120,
          images: [
            {
              url: "https://picsum.photos/500/500?random=3",
              altText: "Stylish Jacket",
            },
          ],
        },
        {
          _id: "4",
          name: "Stylish Jacket",
          price: 120,
          images: [
            {
              url: "https://picsum.photos/500/500?random=4",
              altText: "Stylish Jacket",
            },
          ],
        },
        {
          _id: "5",
          name: "Stylish Jacket",
          price: 120,
          images: [
            {
              url: "https://picsum.photos/500/500?random=5",
              altText: "Stylish Jacket",
            },
          ],
        },
        {
          _id: "6",
          name: "Stylish Jacket",
          price: 120,
          images: [
            {
              url: "https://picsum.photos/500/500?random=6",
              altText: "Stylish Jacket",
            },
          ],
        },
        {
          _id: "7",
          name: "Stylish Jacket",
          price: 120,
          images: [
            {
              url: "https://picsum.photos/500/500?random=7",
              altText: "Stylish Jacket",
            },
          ],
        },
        {
          _id: "8",
          name: "Stylish Jacket",
          price: 120,
          images: [
            {
              url: "https://picsum.photos/500/500?random=8",
              altText: "Stylish Jacket",
            },
          ],
        },
      ];
      setProducts(fetchProducts);
    }, 1000);
  }, []);
  return (
    <div className="flex flex-col lg:flex-row">
      {/* Mobile Filters button */}
      <button
        onClick={toggleSidebar}
        className="lg:hidden border p-2 flex justify-center items-center"
      >
        <FaFilter className="mr-2" /> Filters
      </button>
      {/* Filter Sidebar */}
      <div
        ref={sidebarRef}
        className={`fixed inset-y-0 z-50 left-0 w-64 bg-white overflow-y-auto transition-transform duration-300 lg:static lg:translate-x-0 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <FilterSidebar />
      </div>
      <div className="flex-grow p-4">
        <h2 className="text-2xl uppercase mb-4">All Collection</h2>
        {/* Sort Options */}
        <SortOptions />
        {/* Products Grid */}
        <ProductGrid products={products} />
      </div>
    </div>
  );
};

export default CollectionPage;
