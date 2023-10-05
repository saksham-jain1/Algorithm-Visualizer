import React from "react";
import code from "../../Assets/bubblesort.png";
import { useState } from "react";
import Array from "./Array";
import "./BubbleSort.css";

const BubbleSort = () => {
  const [size, setSize] = useState(15);
  const [array, setArray] = useState([]);
  const [move, setMove] = useState({ j: 0, n: 30 });
  const [loading, setLoading] = useState(false);
  const [speed, setSpeed] = useState("200");

  const generateRandomArray = () => {
    setMove({ j: 0, n: 30 });
    const randomArray = [];
    for (let i = 0; i < size; i++) {
      const randomNumber = Math.floor(Math.random() * 901) + 100;
      randomArray.push(randomNumber);
    }
    setArray([...randomArray]);
  };

  const onStartClick = async () => {
    if (!array.length) {
      alert("First generate the array");
      return;
    }

    setLoading(true);
    const n = array.length;

    for (let i = 0; i < n - 1; i++) {
      let swapped = false;

      for (let j = 0; j < n - i - 1; j++) {
        if (array[j] > array[j + 1]) {
          const temp = array[j];
          array[j] = array[j + 1];
          array[j + 1] = temp;

          setMove({ j: j + 1, n: n - i });
          swapped = true;
        } else {
          setMove({ j: j + 1, n: n - i });
        }

        // Introduce a delay of 500 milliseconds between each step
        await new Promise((resolve) => setTimeout(resolve, speed));
      }

      if (!swapped) {
        setMove({ j: -1, n: 0 });
        break;
      }
    }
    setLoading(false);
  };

  return (
    <div className="main-container">
      <div>
        <h2 className="main-heading">Bubble Sort</h2>
        <p className="description">
          Bubble sort is a simple sorting algorithm that repeatedly steps
          through the list, compares adjacent elements, and swaps them if they
          are in the wrong order. The algorithm gets its name from the way
          smaller elements "bubble" to the top of the list with each pass. While
          not the most efficient sorting method, it is easy to understand and
          implement.
        </p>
        <br />
        <h2>Algorithm</h2>
        <br />
        <p>Bubble sort follows a straightforward algorithm:</p>
        <ol>
          <li>
            <b>Start at the Beginning:</b> Begin by comparing the first two
            elements in the list.
          </li>
          <li>
            <b>Compare and Swap:</b> If the first element is greater than the
            second, swap them. indices.
          </li>
          <li>
            <b>Move to Next Pair:</b> Move to the next pair of elements and
            repeat the comparison and swapping process.
          </li>
          <li>
            <b>Repeat:</b>
            Continue comparing and swapping adjacent elements until you reach
            the end of the list.
          </li>
          <li>
            <b>Next Pass:</b> Repeat the process for each subsequent pass
            through the list until no more swaps are needed.
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
          disabled={loading}
          style={{ "--left": `${6 * (size - 8)}px` }}
        />
        <select
          name="Speed"
          placeholder="Select Speed"
          value={speed}
          disabled={loading}
          onChange={(e) => setSpeed(e.target.value)}
        >
          <option value="100">Fast</option>
          <option value="200">Medium</option>
          <option value="400">Slow</option>
        </select>
        <button disabled={loading} onClick={generateRandomArray}>
          Generate Random Array
        </button>
        <button disabled={loading} onClick={onStartClick}>
          Start
        </button>
      </div>
      <Array array={array} n={move.n} move={move} />
      <div className="detail">
        <span style={{ "--color": "#d8d220" }}>Current Element</span>
        <span style={{ "--color": "#68D391" }}>Sorted Elements</span>
      </div>
      <div className="data">
        <div>
          <h2>Basic Code using `do-while` loop:</h2>
          <br />
          <img src={code} alt="Binary Search Algorithm" className="code" />
        </div>
        <div className="description">
          <h3>Bubble sort is suitable under the following conditions:</h3>
          <ol>
            <li>
              It's useful for educational purposes and learning about sorting
              algorithms.
            </li>
            <li>It works well for small datasets or nearly sorted lists.</li>
            <li>When simplicity is more important than efficiency.</li>
            <li>
              When no additional memory space is available for more efficient
              sorting algorithms.
            </li>
          </ol>
          <br />
          <h3>Advantages</h3>
          <ul>
            <li>
              <b>Ease of Implementation:</b> It is straightforward to understand
              and implement, making it a good choice for educational purposes.
            </li>
            <li>
              <b>Simplicity:</b> The algorithm is relatively simple to
              understand and implement.
            </li>
            <li>
              <b>No Additional Memory:</b> Bubble sort sorts the array in-place,
              requiring no additional memory for temporary data structures.
            </li>
            <li>
              <b>Stability:</b> It is a stable sorting algorithm, meaning it
              preserves the relative order of equal elements.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BubbleSort;
