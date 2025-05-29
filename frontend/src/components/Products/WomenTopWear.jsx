import React, { useEffect } from "react";
import ProductGrid from "./ProductGrid";
import { fetchProductsByFilters } from "../../redux/slices/productsSlice";
import { useDispatch, useSelector } from "react-redux";
import {
  errorProducts,
  loadingProducts,
  products,
} from "../../redux/selectors";

const WomenTopWear = () => {
  const dispatch = useDispatch();
  const womenProducts = useSelector(products);
  const loading = useSelector(loadingProducts);
  const error = useSelector(errorProducts);
  useEffect(() => {
    dispatch(
      fetchProductsByFilters({
        gender: "Women",
        category: "Bottom Wear",
        limit: 8,
      })
    );
  }, [dispatch]);
  return (
    <div className="container mx-auto">
      <h2 className="text-3xl text-center font-bold mb-4">
        Top Wears for Women
      </h2>
      <ProductGrid products={womenProducts} loading={loading} error={error} />
    </div>
  );
};

export default WomenTopWear;
