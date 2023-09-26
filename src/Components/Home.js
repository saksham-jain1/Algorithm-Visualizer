import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h2 className="main-heading">List of Algorithms</h2>
      <div className="main-container">
        <Link to="/binarySearch" className="algo">Binary Search</Link>
        <Link to="/bubbleSort" className="algo">Bubble Sort</Link>
        <Link to="/selectionSort" className="algo">Selection Sort</Link>
        <Link to="/mergeSort" className="algo">Merge Sort</Link>
        <Link to="/insertionSort" className="algo">Insertion Sort</Link>
        <Link to="/quickSort" className="algo">Quick Sort</Link>
      </div>
    </div>
  );
};

export default Home;
