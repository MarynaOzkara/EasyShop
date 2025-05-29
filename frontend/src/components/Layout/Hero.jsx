import React from "react";
import heroImg from "../../assets/easy-shop-hero.webp";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative">
      <img
        src={heroImg}
        alt="EasyShop"
        className="w-full h-[400px] md:h-[600px] lg:h-[750px] object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-10 flex items-center justify-center">
        <div className="text-center text-white p-6">
          <h1 className="text-4xl md:text-6xl lg:text-9xl font-bold tracking-tighter uppercase mb-4">
            New season <br />
            Ready
          </h1>
          <p className="text-sm md:text-lg mb-6">
            Explore our new collection outfits with fast worldwide shipping.
          </p>
          <Link
            to="/collections/all"
            className="bg-white text-gray-900 px-6 py-2 rounded-sm text-lg hover:bg-brand-red hover:text-white transition-all"
          >
            Shop Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
