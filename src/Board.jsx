import React from "react";
import BoardSquare from "./BoardSquare";

export default function Board({ boards }) {
  const isBlack = (index) => {
    const { x, y } = getXYPosition(index);
    const result = (x + y) % 2 === 1;

    return result;
  };

  const getXYPosition = (index) => {
    const x = index % 8;
    const y = Math.abs(Math.floor(index / 8) - 7);

    return { x, y };
  };

  const getPosition = (index) => {
    const { x, y } = getXYPosition(index);
    const letter = ["a", "b", "c", "d", "e", "f", "g", "h"][x];
    return `${letter}${y + 1}`;
  };

  return (
    <div className="flex h-full w-full flex-wrap">
      {boards.flat().map((board, index) => {
        return (
          <div className="h-[12.5%] w-[12.5%]" key={index}>
            <BoardSquare
              board={board}
              isBlack={isBlack(index)}
              position={getPosition(index)}
            />
          </div>
        );
      })}
    </div>
  );
}
