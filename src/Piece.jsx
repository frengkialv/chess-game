import React from "react";
import { useDrag, DragPreviewImage } from "react-dnd";

function Piece({ piece: { type, color }, position }) {
  const image = require(`./assets/${type}-${color}.png`);
  const [{ isDragging }, drag, dragPreview] = useDrag(() => ({
    type: "piece",
    item: { id: `${position}-${type}-${color}` },
    collect: (dragging) => {
      return { isDragging: !!dragging.isDragging() };
    },
  }));

  return (
    <>
      <DragPreviewImage
        connect={dragPreview}
        src={image}
        className="h-12 w-12"
      />
      <div
        className={`${
          isDragging ? "opacity-0" : "opacity-[1]"
        } flex h-full w-full cursor-grab items-center justify-center`}
      >
        {/* {position} */}
        <img src={image} alt="" className="max-h-full max-w-full" ref={drag} />
      </div>
    </>
  );
}

export default Piece;
