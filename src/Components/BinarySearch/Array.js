import React from "react";

const Array = ({ array, start, mid, end, match, loading }) => {
  return (
    <div className="array-box">
      {array.map((i, ind) => {
        return (
          <div
            key={ind}
            className={`array-element ${
              loading
                ? ind < start || ind > end
                  ? "searched"
                  : "remaining"
                : ""
            } ${
              ind === mid
                ? "mid"
                : ind === start
                ? "start"
                : ind === end
                ? "end"
                : ""
            }`}
            id={ind === match ? "match" : ""}
          >
            {i}
          </div>
        );
      })}
    </div>
  );
};

export default Array;
