import React from "react";
import { connect } from "react-redux";

export default function Image(props) {
  console.log("IMAGE PROPS", props.item);
  return (
    <div>
      {props.item.map(dog => {
        return <img src={dog} alt="happy dogs" />;
      })}
    </div>
  );
}

// export default connect()(Image);
