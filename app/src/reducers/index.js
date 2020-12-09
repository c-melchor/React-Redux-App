import { FETCHING_DOG_DATA } from "../actions";

const initialState = {
  dogs: [],
  isFetching: false,
  error: ""
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    //   case (FETCHING_DOG_DATA)
    default:
      return state;
  }
};
