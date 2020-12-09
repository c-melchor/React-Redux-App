import React from "react";
import { connect } from "react-redux";
import { getDogData } from "../actions";
import Image from "./Image";

function DogCard(props) {
  const renderDogImgs = props => {
    console.log("dog func  props", props.dogs.length);
    const dogArr = props.dogs;
    if (dogArr.length < 1) {
      return (
        <h3>
          {"No dog data to display "} {<span>😞</span>}{" "}
        </h3>
      );
    } else {
      return dogArr.map(item => {
        <Image item={item} />;
      });
    }
  };
  return (
    <div>
      <h2>Click to show dogs!</h2>
      {renderDogImgs(props)}
      <button>Click to fetch dog data!</button>
    </div>
  );
}

const mapStateToProps = state => {
  return { ...state, dogs: [...state.dogs], isFetching: false, error: "" };
};

export default connect(mapStateToProps, { getDogData })(DogCard);
