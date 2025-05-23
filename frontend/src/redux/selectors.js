export const product = (state) => state.products.selectedProduct;
export const similar = (state) => state.products.similarProducts;
export const products = (state) => state.products.products;
export const loadingProducts = (state) => state.products.loading;
export const errorProducts = (state) => state.products.error;

export const userId = (state) => state.auth.user;
export const guestId = (state) => state.auth.guestId;
