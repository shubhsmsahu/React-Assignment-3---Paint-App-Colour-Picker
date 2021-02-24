import React, { useState } from "react";

const Selection = (props) => {
  const [SelectionStyle, updateSelectionStyle] = useState({ background: "" });
  const { applyColor, id } = props;
  return (
    <div
      className="fix-box"
      style={SelectionStyle}
      onClick={() => {
        applyColor(updateSelectionStyle);
      }}
    >
      <h2>{id}</h2>
    </div>
  );
};

export default Selection;
