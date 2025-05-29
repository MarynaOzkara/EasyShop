import React, { useEffect, useState } from "react";
import ProductDetails from "./ProductDetails";

import axios from "axios";
import { backend } from "../../redux/instance";

const BestSeller = () => {
  const [bestSeller, setBestSeller] = useState(null);

  useEffect(() => {
    const fetchBestSeller = async () => {
      try {
        const response = await backend.get(`/api/products/best-seller`);
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
