import React from "react";

// Implement Tile as a stateless component that renders data from the tile object
export const Tile = ({ tile }) => {
  return (
    <div className="tile-container">
      {Object.values(tile).map((value, index) => (
        <p key={index} className={`${index === 0 ? "tile-title" : ""} tile`}>
          {value}
        </p>
      ))}
    </div>
  );
};
