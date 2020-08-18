import React, { useReducer, useEffect } from "react";
import {
  ADD_ITEM_TO_CART,
  REMOVE_ITEM_FROM_CART,
  INCREASE_ITEM_QUANTITY,
  DECREASE_ITEM_QUANTITY,
  CLEAR_CART,
} from "../ActionTypes";
import { CartReducer } from "./cartReducer";
import CartContext from "./cartContext";

const CartState = (props) => {
  const storage = localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [];

  const initialState = {
    cart: storage,
    totalPrice: 0,
    checkout: false,
  };

  const [state, dispatch] = useReducer(CartReducer, initialState);

  const increase = (payload) => {
    dispatch({ type: INCREASE_ITEM_QUANTITY, payload });
  };

  const decrease = (payload) => {
    dispatch({ type: DECREASE_ITEM_QUANTITY, payload });
  };

  const addProduct = (payload) => {
    dispatch({ type: ADD_ITEM_TO_CART, payload });
  };

  const removeProduct = (payload) => {
    dispatch({ type: REMOVE_ITEM_FROM_CART, payload });
  };

  const clearCart = () => {
    dispatch({ type: CLEAR_CART });
  };

  return (
    <CartContext.Provider
      value={{
        cart: state.cart,
        totalPrice: state.totalPrice,
        loading: state.loading,
        removeProduct,
        addProduct,
        increase,
        decrease,
        clearCart,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartState;
