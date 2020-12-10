import React from "react";
import "../App.css";

export default function Image(props) {
  return (
    <div>
      {props.item.map(dog => {
        return <img className="images" src={dog} key={dog} alt="happy dogs" />;
      })}
    </div>
  );
}
