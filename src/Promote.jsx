import React from "react";
import Square from "./Square";
import { move } from "./Game";

const promotionPieces = ["r", "n", "b", "q"];

function Promote({ promotion: { from, to, color } }) {
  return (
    <div className="flex h-full w-full flex-wrap">
      {promotionPieces.map((promotionPiece, index) => (
        <div className="h-[50%] w-[50%]" key={index}>
          <Square isBlack={index % 3 === 0}>
            <div
              className="flex h-full w-full cursor-grab items-center justify-center"
              onClick={() => move(from, to, promotionPiece)}
            >
              <img
                src={require(`./assets/${promotionPiece}-${color}.png`)}
                alt=""
                className="max-h-full max-w-full cursor-pointer"
              />
            </div>
          </Square>
        </div>
      ))}
    </div>
  );
}

export default Promote;
