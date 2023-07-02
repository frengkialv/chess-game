import React from "react";

function Square({ children, isBlack }) {
  return (
    <div
      className={`${isBlack ? "bg-[#769656]" : "bg-[#ebecd0]"} h-full w-full`}
    >
      {children}
    </div>
  );
}

export default Square;
