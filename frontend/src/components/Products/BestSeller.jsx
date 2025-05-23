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
  // console.log(bestSeller);
  return (
    <>
      {bestSeller ? (
        <ProductDetails productId={bestSeller} />
      ) : (
        <p className="text-center">Loading best seller product...</p>
      )}
    </>
  );
};

export default BestSeller;
