import {
  ADD_ITEM_TO_CART,
  REMOVE_ITEM_FROM_CART,
  INCREASE_ITEM_QUANTITY,
  DECREASE_ITEM_QUANTITY,
  CLEAR_CART,
  GET_CART,
} from "../ActionTypes";

const Storage = (cart) => {
  localStorage.setItem("cart", JSON.stringify(cart.length > 0 ? cart : []));
};

export const sumItems = (cart) => {
  Storage(cart);
  let itemCount = cart.reduce((total, product) => total + product.quantity, 0);
  let totalPrice = cart
    .reduce((total, product) => total + product.price * product.quantity, 0)
    .toFixed(2);
  return { itemCount, totalPrice };
};






export const CartReducer = (state, action) => {
  switch (action.type) {
    case GET_CART:
      return {
        ...state,
        cart: action.payload,
        loading: false,
      };

    case ADD_ITEM_TO_CART:
      let addedItem = state.cart.find((item) => item.id === action.payload.id)
      if (!addedItem) {
        state.cart.push({
          ...action.payload,
          quantity: 1,
        });
      }
     
      return {
        ...state,
        ...sumItems(state.cart),
        cart: [...state.cart],
        loading: false,
      };

    case REMOVE_ITEM_FROM_CART:
      return {
        ...state,
        ...sumItems(state.cart.filter((item) => item.id !== action.payload.id)),
        cart: [...state.cart.filter((item) => item.id !== action.payload.id)],
        loading: false,
      };

    case INCREASE_ITEM_QUANTITY:
      // state.cart.map((item) =>
      //     item.id === action.payload.id
      //       ? { ...item, quantity: item.quantity + 1 }
      //       : item
      //   );
      let increaseItem = state.cart.find((item) => item.id === action.payload.id)
      increaseItem.quantity++
      // let newTotal = state.totalPrice + addedItem

      return {
        ...state,
        ...sumItems(state.cart),
        cart: [...state.cart],
        loading: false,
      };

    case DECREASE_ITEM_QUANTITY:
      state.cart[state.cart.findIndex((item) => item.id === action.payload.id)]
        .quantity--;
      return {
        ...state,
        ...sumItems(state.cart),
        cart: [...state.cart],
        loading: false,
      };

    case CLEAR_CART:
      return {
        cart: [],
        loading: false,
      };
    default:
      return state;
  }
};
