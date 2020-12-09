import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getDogData } from "../actions";
import Image from "./Image";

function DogCard(props) {
  console.log("PROPS HERE", props);
  useEffect(() => {
    getDogData();
  }, []);

  if (props.error) {
    return <h3>Sorry, there is a bug 🐛 {props.error} </h3>;
  }
  if (props.isFetching) {
    return <h3>Patience is a virtue...</h3>;
  }

  const handleClick = () => {
    props.getDogData();
  };

  return (
    <div>
      <h2>Click to show dogs!</h2>
      <Image item={props.dogs} />
      <button onClick={handleClick}>Click to fetch dog data!</button>
    </div>
  );
}

const mapStateToProps = state => {
  console.log("STATE", state);
  return {
    // ...state,
    dogs: [...state.dogs],
    isFetching: state.isFetching,
    error: state.error
  };
};

export default connect(mapStateToProps, { getDogData })(DogCard);
