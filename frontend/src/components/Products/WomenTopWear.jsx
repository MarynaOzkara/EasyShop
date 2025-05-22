import React, { useEffect } from "react";
import ProductGrid from "./ProductGrid";
import { fetchProductsByFilters } from "../../redux/slices/productsSlice";
import { useDispatch, useSelector } from "react-redux";
import {
  errorProducts,
  loadingProducts,
  products,
} from "../../redux/selectors";

// const placeholderProducts = [
//   {
//     _id: "1",
//     name: "Stylish Jacket",
//     price: 120,
//     images: [
//       {
//         url: "https://picsum.photos/500/500?random=1",
//         altText: "Stylish Jacket",
//       },
//     ],
//   },
//   {
//     _id: "2",
//     name: "Stylish Jacket",
//     price: 120,
//     images: [
//       {
//         url: "https://picsum.photos/500/500?random=2",
//         altText: "Stylish Jacket",
//       },
//     ],
//   },
//   {
//     _id: "3",
//     name: "Stylish Jacket",
//     price: 120,
//     images: [
//       {
//         url: "https://picsum.photos/500/500?random=3",
//         altText: "Stylish Jacket",
//       },
//     ],
//   },
//   {
//     _id: "4",
//     name: "Stylish Jacket",
//     price: 120,
//     images: [
//       {
//         url: "https://picsum.photos/500/500?random=4",
//         altText: "Stylish Jacket",
//       },
//     ],
//   },
//   {
//     _id: "5",
//     name: "Stylish Jacket",
//     price: 120,
//     images: [
//       {
//         url: "https://picsum.photos/500/500?random=5",
//         altText: "Stylish Jacket",
//       },
//     ],
//   },
//   {
//     _id: "6",
//     name: "Stylish Jacket",
//     price: 120,
//     images: [
//       {
//         url: "https://picsum.photos/500/500?random=6",
//         altText: "Stylish Jacket",
//       },
//     ],
//   },
//   {
//     _id: "7",
//     name: "Stylish Jacket",
//     price: 120,
//     images: [
//       {
//         url: "https://picsum.photos/500/500?random=7",
//         altText: "Stylish Jacket",
//       },
//     ],
//   },
//   {
//     _id: "8",
//     name: "Stylish Jacket",
//     price: 120,
//     images: [
//       {
//         url: "https://picsum.photos/500/500?random=8",
//         altText: "Stylish Jacket",
//       },
//     ],
//   },
// ];
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
