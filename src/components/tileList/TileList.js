import React from "react";
import { Tile } from "../tile/Tile";

// Extract array value of tiles prop
export const TileList = ({ tiles }) => {
  // Iteratively render Tile components
  return (
    <div>
      {tiles.map((tile, index) => (
        // Render Tile with props
        <Tile 
          key={index} 
          tile={tile} 
        />
      ))}
    </div>
  );
};
