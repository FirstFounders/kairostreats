import React, { useReducer } from "react";
import {
  ADD_ITEM_TO_CART,
  REMOVE_ITEM_FROM_CART,
  INCREASE_ITEM_QUANTITY,
  DECREASE_ITEM_QUANTITY,
  CLEAR_CART,
  CHECKOUT,
  SET_LOADING,
} from "../ActionTypes";
import { CartReducer, sumItems } from "./cartReducer";
import CartContext from "./cartContext";
import Axios from "axios";

const CartState = (props) => {
  const storage = localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [];

  const initialState = {
    cart: storage,
    ...sumItems(storage),
    checkout: false,
  };

  const [state, dispatch] = useReducer(CartReducer, initialState);

  const increase = (payload, qty) => {
    setLoading()
    dispatch({ type: INCREASE_ITEM_QUANTITY, payload, qty });
  };

  const decrease = (payload, qty) => {
    setLoading()
    dispatch({ type: DECREASE_ITEM_QUANTITY, payload, qty });
  };

  const addProduct = (payload) => {
    setLoading()
    dispatch({ type: ADD_ITEM_TO_CART, payload });
  };

  const removeProduct = (payload) => {
    setLoading()
    dispatch({ type: REMOVE_ITEM_FROM_CART, payload });
  };

  const checkout = async (data) => {
    setLoading()
    const response = await Axios.get("/order", data);
    dispatch({ type: CHECKOUT, payload: response.data.data });
  };

  const clearCart = () => {
    setLoading()
    dispatch({ type: CLEAR_CART });
  };

  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <CartContext.Provider
      value={{
        cart: state.cart,
        loading: state.loading,
        removeProduct,
        addProduct,
        increase,
        decrease,
        checkout,
        clearCart,
        ...state,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartState;
