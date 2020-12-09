import React from "react";
import { connect } from "react-redux";
import { getDogData } from "../actions";

function DogCard(props) {
  console.log("PROPS HERE", props);
  return (
    <div>
      <p>Hello from DogCard</p>
    </div>
  );
}

const mapStateToProps = state => {
  return { ...state, dogs: [state.dogs], isFetching: false, error: "" };
};

export default connect(mapStateToProps, { getDogData })(DogCard);
