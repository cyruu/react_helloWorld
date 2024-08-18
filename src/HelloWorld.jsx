import React, { useEffect } from "react";
import Box from "./Box";

const HelloWorld = ({ str }) => {
  const arr = Array.from({ length: str.length });

  return (
    <div style={{ display: "flex", margin: "5rem 0" }}>
      {arr.map((el, i) => {
        return <Box key={i} str={str} index={i} />;
      })}
    </div>
  );
};

export default HelloWorld;
