import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getDogData } from "../actions";
import Image from "./Image";
import "../styles/form.css";

function DogCard(props) {
  console.log(props, "PROPS");
  const [input, setInput] = useState("");

  useEffect(() => {
    getDogData();
  }, []);

  const onChange = e => {
    setInput(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    console.log(input, "INPUT");
    props.getDogData(input);
  };
  if (props.error) {
    return (
      <div>
        <h3>Sorry, we couldn't find that dog 😒 </h3>
        <h3>Please try again</h3>
        <div className="form">
          <form onSubmit={onSubmit}>
            <label htmlFor="search">
              Search:
              <input
                placeholder="enter breed"
                className="input"
                onChange={onChange}
                id="search"
                type="text"
              />
              <button className="button">Click to search</button>
            </label>
          </form>
        </div>
      </div>
    );
  }

  if (props.isFetching) {
    return <h3>Patience is a virtue...</h3>;
  }

  return (
    <div>
      <div className="form">
        <form onSubmit={onSubmit}>
          <label htmlFor="search">
            Search:
            <input
              placeholder="enter breed"
              className="input"
              onChange={onChange}
              id="search"
              type="text"
            />
            <button className="button">Click to search</button>
          </label>
        </form>
      </div>

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
