import React from "react";
import { connect } from "react-redux";

function DogCard(props) {
  return (
    <div>
      <p>Hello from DogCard</p>
    </div>
  );
}

const mapStateToProps = state => {
  console.log(state, "DOG CARD STATE");
  return { ...state, name: state.name, breed: state.breed, isFetching: false };
};

export default connect(mapStateToProps)(DogCard);
