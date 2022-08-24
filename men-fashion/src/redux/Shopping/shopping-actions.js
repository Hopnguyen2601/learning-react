import productApi from '../../apis/productApi';
import * as actionTypes from './shopping-types';

export const addToCart = (productId) => {
  return {
    type: actionTypes.ADD_TO_CART,
    payload: {
      productId: productId,
    },
  };
};

export const toggleOpenCart = () => {
  return {
    type: actionTypes.TOGGLE_OPEN_CART,
  };
};

export const fetchProductsRequest = () => {
  return (dispatch) => {
    (async () => {
      try {
        const res = await productApi.getAll();
        dispatch(fetchProducts(res.data));
      } catch (error) {
        console.log(error);
      }
    })();
  };
};

const fetchProducts = (products) => ({
  type: actionTypes.FETCH_PRODUCT_LIST,
  payload: products,
});
