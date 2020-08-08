import React, { useReducer, useEffect } from "react";
import Axios from "axios";
import CakesContext from "./cakesContext";
import CakesReducer from "./cakesReducer";
import {
  GET_CAKES,
  GET_RECOMMENDED_CAKES,
  GET_CAKE,
  GET_CATEGORY,
  SET_LOADING,
} from "../ActionTypes";

const CakesState = (props) => {
  const initialState = {
    cakes:[],
    recommended_cakes: [],
    cake: {},
    category: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(CakesReducer, initialState);

  // GET ALL CAKES
  const getAllCakes = async () => {
    setLoading();
    const response = await Axios.get("/products");
    // return response.data;
    console.log(response.data)
    dispatch({ type: GET_CAKES, payload: response.data.data });
  };

  const getRecommendedCakes = async () => {
    setLoading();
    const response = await Axios.get("/recommended/products");
    // return response.data;
    
    dispatch({ type: GET_RECOMMENDED_CAKES, payload: response.data.data });
  };

  // GET CAKE
  // GET CATEGORY
  // SET LOADING
  const setLoading = () => dispatch({ type: SET_LOADING });
  return (
    <CakesContext.Provider
      value={{
        cakes: state.cakes,
        recommended_cakes: state.recommended_cakes,
        cake: state.cake,
        category: state.category,
        loading: state.loading,
        getAllCakes,
        getRecommendedCakes,
      }}
    >
      {props.children}
    </CakesContext.Provider>
  );
};

export default CakesState;
