import React, { useEffect, useRef } from "react";

export default function Outside({ children, onClick = () => {} }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const handleDocumentClick = ({ target }) => {
      const container = containerRef.current;

      const isTargetOutSide =
        (container && container === target) ||
        (container && !container.contains(target));

      if (isTargetOutSide) onClick();
    };

    document.addEventListener("click", handleDocumentClick, true);
    return () =>
      document.removeEventListener("click", handleDocumentClick, true);
  }, [onClick]);

  return (
    <div ref={containerRef} className="fixed z-20 h-screen w-screen">
      {children}
    </div>
  );
}
