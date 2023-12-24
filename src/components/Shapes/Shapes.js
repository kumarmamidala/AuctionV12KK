import React, { useState } from "react";
import "./Shapes.css"; // Import your stylesheet

const Shapes = () => {
  const [isShapesFrozen, setShapesFrozen] = useState(false);

  const renderShapes = () => {
    const shapes = [];
    for (let i = 1;  i <= 9; i++) {
      shapes.push(
        <div
          key={i}
          className={`shape-container--${i} shape-animation ${
            isShapesFrozen ? "stop-shape" : ""
          }`}
        >
          <div className="random-shape"></div>
        </div>
      );
    }
    return shapes;
  };

  return <div className="shapes-part">{renderShapes()}</div>;
};

export default Shapes;
