import React, { useState } from "react";
import "./StarRating.css";
import { FaStar } from "react-icons/fa";

const createArray = (length) => [...Array(length)];

function Star({ selected, onSelect }) {
  return <FaStar onClick={onSelect} color={selected ? "red" : "gray"} />;
}

function StarRating({ totalStars = 5 }) {
  const [selectedStars, setSelectedStars] = useState(0);
  return (
    <div className="star-rating">
      <div className="stars">
        {createArray(totalStars).map((n, i) => (
          <Star
            selected={selectedStars > i}
            onSelect={() => setSelectedStars(i + 1)}
            key={i}
          />
        ))}
      </div>
      <p>
        {selectedStars} of {totalStars} stars
      </p>
    </div>
  );
}

export default StarRating;
