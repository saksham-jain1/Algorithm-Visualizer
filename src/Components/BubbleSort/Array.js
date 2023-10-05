import React from "react";

const Array = ({ array, n, move }) => {
  return (
    <div className="array-box">
      {array.map((curr, ind) => {
        return (
          <div
            key={ind}
            className={`array-element ${ind >= n ? "sorted" : ""} ${
              ind === move.j ? "current" : ""
            }`}
            style={{
              height: `${curr / 10}%`,
            }}
            val={ind}
          />
        );
      })}
    </div>
  );
};

export default Array;
