import { IoMdClose } from "react-icons/io";
import CartContents from "../Cart/CartContents";
import { useNavigate } from "react-router-dom";

const CartDrawer = ({ openDrawer, toggleCartDrawer }) => {
  const navigate = useNavigate();
  const handleCheckout = () => {
    toggleCartDrawer();
    navigate("/checkout");
  };
  return (
    <div
      className={`fixed top-0 right-0 w-3/4 sm:w-1/2 md:w-[35rem] h-full bg-white shadow-lg transform transition-transform duration-300 flex flex-col z-50 ${
        openDrawer ? "translate-x-0" : "translate-x-full"
      }`}
    >
      {/* Close button */}
      <div className="flex justify-end p-4">
        <button onClick={toggleCartDrawer}>
          <IoMdClose className="w-6 h-6 text-gray-600" />
        </button>
      </div>
      {/* art Content with Scloll */}
      <div className="flex-grow p-4 overflow-y-auto">
        <h2 className="text-xl font-semibold mb-4">Your Cart</h2>
        {/* Component for Cart Contents */}
        <CartContents />
      </div>
      {/* Checout Button */}
      <div className="p-4 bg-white sticky bottom-0">
        <button
          onClick={handleCheckout}
          className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-700 transition"
        >
          Checkout
        </button>
        <p className="text-sm tracking-tighter text-gray-500 mt-2 text-center">
          Shipping, taxes and discount codes calculated at checkout.
        </p>
      </div>
    </div>
  );
};

export default CartDrawer;
