import React from "react";


export default function UnconnectedBoard({ height, width }) {
  const colors = ["light_orange", "dark_orange", "light_blue", "dark_blue", "violet"];
  const generateTableOfColors = (height, width) => {
    const table = [];
    for (let i = 0; i < height; i++) {
      const row = [];
      for (let j = 0; j < width; j++) {
        row.push(colors[Math.floor(Math.random() * colors.length)]);
      }
      table.push(row);
    }
    return table;
  };

  const createSquares = tableOfColors => {
    const tableOfSquares = tableOfColors.map((row, rowIndex) => {
      return (
        <div key ={Math.random()}className={`row-${rowIndex}`}>
          {row.map((color,squareIndex) => {
            return (
              <div className={`square ${color}`} key={Math.random()} data-position={squareIndex}></div>
            );
          })}
        </div>
      );
    });

    return tableOfSquares;
  };

  return (
    <div className="game_board">
      {createSquares(generateTableOfColors(height, width))}
    </div>
  );
}
