import React from "react";

const Box = ({ str, index }) => {
  return (
    <div
      style={{
        background: "white",
        color: "black",
        margin: "0 .2rem",
        height: "40px",
        width: "40px",
        padding: "5px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "1.8rem",
        borderRadius: "5px",
      }}
      id={`box${index}`}
    ></div>
  );
};

export default Box;
