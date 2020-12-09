import axios from "axios";

export const FETCHING_DOG_DATA = "FETCHING_DOG_DATA";
export const DOG_DATA_SUCCESS = "DOG_DATA_SUCCESS";
export const DOG_DATA_FAIL = "DOG_DATA_FAIL";

export const getDogData = searchTerms => dispatch => {
  dispatch({ type: FETCHING_DOG_DATA });
  axios
    .get(`https://dog.ceo/api/breed/${searchTerms}/images`)
    .then(res => {
      dispatch({ type: DOG_DATA_SUCCESS, payload: res.data.message });
    })
    .catch(err => {
      console.log(err, "ERROR HERE");
      dispatch({ type: DOG_DATA_FAIL, payload: err.response.message });
    });
};

const fetchFail = name => {
  return { type: DOG_DATA_FAIL };
};
