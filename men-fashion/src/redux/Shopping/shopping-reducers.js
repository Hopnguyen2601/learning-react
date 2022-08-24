import * as actionTypes from './shopping-types';

const INITIAL_STATE = {
  products: [
    // {
    //   id: 1,
    //   name: 'the tshirt red',
    //   quantity: 2,
    //   price: 1000,
    //   image:
    //     'https://footwearnews.com/wp-content/uploads/2021/10/dwayne-johnson-jumanji-premiere-red-carpet.jpg?w=700&h=437&crop=1',
    // },
    // {
    //   name: 'The Rock fashion',
    //   price: '1000',
    //   image:
    //     'https://cdn.shopify.com/s/files/1/0566/1795/9593/products/f9ba729fb2d24082a3809ec717be9f06.png?v=1653804455',
    //   quantity: 1,
    //   id: 2,
    // },
    // {
    //   name: 'The Rock fashion 5',
    //   price: 0,
    //   image:
    //     'https://cdn.shopify.com/s/files/1/0566/1795/9593/products/760sapphire.jpg?v=1658397181&width=600',
    //   quantity: 1,
    //   id: 3,
    // },
    // {
    //   name: 'The Rock fashion 6',
    //   price: 0,
    //   image:
    //     'https://cdn.shopify.com/s/files/1/0566/1795/9593/products/f9ba729fb2d24082a3809ec717be9f06.png?v=1653804455',
    //   quantity: 1,
    //   id: 4,
    // },
    // {
    //   name: 'The Rock fashion 7',
    //   price: '200000002',
    //   image:
    //     'https://cdn.shopify.com/s/files/1/0566/1795/9593/products/760sapphire.jpg?v=1658397181&width=600',
    //   quantity: 1,
    //   id: 5,
    // },
  ],
  cart: [],
  isOpen: false,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      // Check item data from product list
      const item = state.products.find(
        (product) => product.id === action.payload.productId
      );

      // Check if product is in cart already
      const inCart = state.cart.find((product) =>
        product.id === action.payload.productId ? true : false
      );

      let cart = [];
      if (inCart) {
        cart = state.cart.map((item) =>
          item.id === action.payload.productId
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        );
      } else {
        cart = [...state.cart, { ...item, quantity: 1 }];
      }

      return {
        ...state,
        cart: cart,
      };

    case actionTypes.TOGGLE_OPEN_CART:
      return {
        ...state,
        isOpen: !state.isOpen,
      };

    case actionTypes.FETCH_PRODUCT_LIST:
      console.log('Products==', action.payload);
      return {
        ...state,
        products: action.payload,
      };

    default:
      return state;
  }
};

export default shopReducer;
