import React, { useEffect, useState } from "react";
import ProductDetails from "./ProductDetails";

import axios from "axios";

const BestSeller = () => {
  const [bestSeller, setBestSeller] = useState(null);

  useEffect(() => {
    const fetchBestSeller = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/api/products/best-seller`
        );
        setBestSeller(response.data._id);
      } catch (error) {
        console.error(error);
      }
    };
    fetchBestSeller();
  }, []);
  console.log(bestSeller);
  return (
    <>
      <h2 className="text-3xl text-center font-bold mb-4">Best Seller</h2>
      {bestSeller ? (
        <ProductDetails productId={bestSeller} />
      ) : (
        <p className="text-center">Loading best seller product...</p>
      )}
    </>
  );
};

export default BestSeller;
