import { DOG_DATA_SUCCESS, DOG_DATA_FAIL, FETCHING_DOG_DATA } from "../actions";

const initialState = {
  dogs: [],
  isFetching: false,
  error: ""
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_DOG_DATA:
      return {
        ...state,
        isFetching: true,
        error: ""
      };
    case DOG_DATA_SUCCESS:
      return {
        ...state,
        dogs: action.payload,
        isFetching: false
      };
    case DOG_DATA_FAIL:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};
