import React from "react";

function Button(props) {
    let {className, text} = props
  return (
    <>
      <button className={className}>
        {text}
      </button>
    </>
  );
}

export default Button;
