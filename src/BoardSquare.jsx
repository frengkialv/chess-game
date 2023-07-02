import React, { useState, useEffect } from "react";
import { useDrop } from "react-dnd";
import { handleMove, gameSubject } from "./Game";
import Piece from "./Piece";
import Square from "./Square";
import Promote from "./Promote";

function BoardSquare({ board, isBlack, position }) {
  const [promotion, setPromotion] = useState(null);
  const [, drop] = useDrop({
    accept: "piece",
    drop: (item) => {
      const [fromPosition] = item.id.split("-");
      handleMove(fromPosition, position);
    },
  });

  useEffect(() => {
    const subscribe = gameSubject.subscribe(({ pendingPromotion }) => {
      pendingPromotion && pendingPromotion.to === position
        ? setPromotion(pendingPromotion)
        : setPromotion(null);
    });

    return () => subscribe.unsubscribe();
  });

  return (
    <div className="h-full w-full" ref={drop}>
      <Square isBlack={isBlack}>
        {promotion ? (
          <Promote promotion={promotion} />
        ) : board ? (
          <Piece piece={board} position={position} />
        ) : null}
      </Square>
    </div>
  );
}

export default BoardSquare;
