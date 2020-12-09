import React from "react";

export default function Image(props) {
  return (
    <div>
      {props.item.map(dog => {
        return <img src={dog} key={dog} alt="happy dogs" />;
      })}
    </div>
  );
}
