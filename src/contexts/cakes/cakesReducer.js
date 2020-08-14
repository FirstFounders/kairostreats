import { GET_CAKES, SET_LOADING, GET_RECOMMENDED_CAKES } from "../ActionTypes";

export default (state, action) => {
  switch (action.type) {
    case GET_CAKES:
      return {
        ...state,
        cakes: action.payload,
        loading: false,
      };
    case GET_RECOMMENDED_CAKES:
      return {
        ...state,
        recommended_cakes: action.payload,
        loading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};
