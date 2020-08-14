import React, { useReducer } from "react";
import Axios from "axios";
import CakesContext from "./cakesContext";
import CakesReducer from "./cakesReducer";
import {
  GET_CAKES,
  GET_RECOMMENDED_CAKES,
  SET_LOADING,
} from "../ActionTypes";

const CakesState = (props) => {

  const initialState = {
    cakes: [],
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
    console.log(response.data);
    dispatch({ type: GET_CAKES, payload: response.data.data });
  };

  const getRecommendedCakes = async () => {
    setLoading();
    const response = await Axios.get("/recommended/products");
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
