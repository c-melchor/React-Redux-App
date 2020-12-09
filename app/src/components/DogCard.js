import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getDogData } from "../actions";
import Image from "./Image";

function DogCard(props) {
  console.log(props, "PROPS");
  const [input, setInput] = useState("");

  useEffect(() => {
    getDogData();
  }, []);

  if (props.error) {
    return <h3>Sorry, we couldn't find that dog 😒 </h3>;
  }
  if (props.isFetching) {
    return <h3>Patience is a virtue...</h3>;
  }

  const onChange = e => {
    setInput(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    console.log(input, "INPUT");
    props.getDogData(input);
  };
  const handleClick = () => {
    props.getDogData();
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <label htmlFor="search">
          Search:
          <input onChange={onChange} id="search" type="text" />
          <button>Click to search</button>
        </label>
      </form>

      <h2>Search a breed to begin! 🐕 </h2>
      <Image item={props.dogs} />
    </div>
  );
}

const mapStateToProps = state => {
  console.log(state, "STATEEEEEE****");
  return {
    dogs: [...state.dogs],
    isFetching: state.isFetching,
    error: state.error
  };
};

export default connect(mapStateToProps, { getDogData })(DogCard);
