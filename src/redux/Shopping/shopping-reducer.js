import * as actionTypes from "./shopping-types";

const INITIAL_STATE = {
  products: [
    {
      id: 1,
      product_name: "Chocolate Cake 1",
      description:
        "Structure of the cake consists of layers of vanilla sponge sandwiched between layers of pineapple jam.",
      price: 100,
      currency: "$",
      img: "cake-1.png",
    },
    {
      id: 2,
      product_name: "Chocolate Cake 2",
      description:
        "Structure of the cake consists of layers of vanilla sponge sandwiched between layers of pineapple jam.",
      price: 100,
      currency: "$",
      img: "cake-2.png",
    },
  ], //id, product_name, description, price, img
  cart: [], //id, product_name, description, price, img, qty
  currentItem: null,
};
const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      return {};
    case actionTypes.REMOVE_FROM_CART:
      return {};
    case actionTypes.ADJUST_QTY:
      return {};
    case actionTypes.LOAD_CURRENT_ITEM:
      return {};
    default:
      return state;
  }
};

export default shopReducer;
