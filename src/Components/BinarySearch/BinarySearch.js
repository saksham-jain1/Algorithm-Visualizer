import React, { useState } from "react";
import "./BinarySearch.css";
import Array from "./Array";
import code from "../../Assets/snippet.png";

const BinarySearch = (start, mid, end) => {
  const [size, setSize] = useState(15);
  const [array, setArray] = useState([]);
  const [s, setS] = useState(-1);
  const [e, setE] = useState(30);
  const [m, setM] = useState(-1);
  const [match, setMatch] = useState(-1);
  const [target, setTarget] = useState();
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");

  const generateAndSortRandomArray = () => {
    setS(-1);
    setM(-1);
    setE(30);
    setMatch(-1);
    const randomArray = [];
    for (let i = 0; i < size; i++) {
      const randomNumber = Math.floor(Math.random() * 1001);
      randomArray.push(randomNumber);
    }
    randomArray.sort((a, b) => a - b);
    setArray([...randomArray]);
  };

  const onStartClick = async () => {
    setS(-1);
    setM(-1);
    setE(30);
    setMatch(-1);
    setResult("");
    if (!target) {
      alert("Please enter the search target");
      return;
    }
    if (!array.length) {
      alert("First generate the array");
      return;
    }
    setLoading(true);
    const steps = await binarySearchWithSteps();
    setS(steps.steps[0].start);
    setTimeout(() => {
      setM(steps.steps[0].mid);
    }, 500);
    setE(steps.steps[0].end);
    setMatch(-1);
    let stepIndex = 1;
    const intervalId = setInterval(() => {
      if (stepIndex < steps.steps.length) {
        const { start, mid, end } = steps.steps[stepIndex];
        setS(start);
        setE(end);
        setM(-1);
        setTimeout(() => {
          setM(mid);
        }, 500);
        if (stepIndex === steps.steps.length - 1 && steps.found)
          setTimeout(() => {
            setMatch(mid);
            setResult(`Yeah! We found the element at index ${mid}`);
          }, 500);
        stepIndex++;
      } else {
        if (!steps.found) setResult(`OOPS! Element is not in the array`);
        clearInterval(intervalId);
        setLoading(false);
      }
    }, 2000);
  };

  function binarySearchWithSteps() {
    const steps = [];

    let start = 0;
    let end = array.length - 1;

    while (start <= end) {
      const mid = Math.floor((start + end) / 2);

      steps.push({
        start: start,
        mid: mid,
        end: end,
      });

      if (array[mid] === target * 1) {
        return { found: true, steps: steps };
      } else if (array[mid] < target) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }

    return { found: false, steps: steps };
  }

  return (
    <div className="main-container">
      <div>
        <h2 className="main-heading">Binary Search Algorithm</h2>
        <p className="description">
          Binary search, also known as half-interval search or logarithmic
          search, is a search algorithm used to find a specific item within a
          sorted list or array. It efficiently reduces the search space by
          dividing it in half with each comparison, making it significantly
          faster than linear search for large datasets.
        </p>
        <br />
        <h2>Algorithm</h2>
        <br />
        <p>Binary search follows a simple algorithm:</p>
        <ol>
          <li>
            <b>Initialize:</b> Define the start and end of the search range as
            the first and last elements of the sorted array.
          </li>
          <li>
            <b>Search:</b> Calculate the middle index between the start and end
            indices.
          </li>
          <li>
            <b>Compare:</b> Compare the middle element with the target value.
          </li>
          <li>
            <b>Adjust the Range:</b>
            <ul>
              <li>
                If the middle element matches the target, the search is
                complete.
              </li>
              <li>
                If the middle element is less than the target, set the start
                index to mid + 1.
              </li>
              <li>
                If the middle element is greater than the target, set the end
                index to mid - 1.
              </li>
            </ul>
          </li>
          <li>
            <b>Repeat:</b> Continue the process until the start index is less
            than or equal to the end index.
          </li>
          <li>
            <b>Result:</b> If the target element is found, return its index;
            otherwise, return -1 (indicating that the target is not in the
            array).
          </li>
        </ol>
      </div>
      <h2>Visualization</h2>
      <div className="actions">
        <label htmlFor="size">Array Size:</label>
        <input
          type="range"
          id="size"
          onChange={(e) => {
            setArray([]);
            setSize(e.target.value);
          }}
          value={size}
          min="8"
          step="1"
          max="30"
          style={{ "--left": `${6 * (size - 8)}px` }}
        />
        <input
          type="number"
          placeholder="Enter target Value"
          id="target-input"
          value={target}
          disabled={loading}
          onChange={(e) => setTarget(e.target.value)}
        />
        <button onClick={generateAndSortRandomArray}>
          Generate Random Array
        </button>
        <button onClick={onStartClick}>Start</button>
      </div>
      <Array
        loading={loading}
        array={array}
        match={match}
        start={s}
        mid={m}
        end={e}
      />
      <div className={`${result && "search-result"}`}>{result}</div>
      <div className="detail">
        <span style={{ "--color": "#d8d220" }}>Start/End Element</span>
        <span style={{ "--color": "#f34646" }}>Mid Element</span>
        <span style={{ "--color": "#d6bcfa" }}>Selected-Array</span>
      </div>
      <div className="data">
        <div>
          <h2>Basic Code using `while` loop:</h2>
          <br />
          <img src={code} alt="Binary Search Algorithm" className="code" />
        </div>
        <div className="description">
          <h3>
            Conditions Binary search is effective under the following
            conditions:
          </h3>
          <ol>
            <li>
              The data must be sorted in ascending order for binary search to
              work.
            </li>
            <li>
              It's most efficient for large datasets where a linear search would
              be too slow.
            </li>
            <li>
              The data structure must support random access (e.g., arrays or
              lists with indexed access)
            </li>
          </ol>
          <br />
          <h3>Advantages Binary search offers several advantages:</h3>
          <ul>
            <li>
              <b>Efficiency:</b> It has a time complexity of O(log n), making it
              much faster than linear search (O(n)) for large datasets.
            </li>
            <li>
              <b>Simplicity:</b> The algorithm is relatively simple to
              understand and implement.
            </li>
            <li>
              <b>Versatility:</b> Binary search can be applied to a wide range
              of data types, including numbers, strings, and more.{" "}
            </li>
            <li>
              <b>Space Efficiency:</b> It requires minimal additional memory,
              only a few variables to keep track of indices.
            </li>
            <li>
              <b>Deterministic:</b> Binary search will consistently find the
              same result for the same data, making it reliable.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BinarySearch;
