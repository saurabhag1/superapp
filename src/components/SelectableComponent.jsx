// SelectableComponent.js
import React from "react";

const SelectableComponent = ({ id, onSelect, isSelected }) => {
  const handleClick = () => {
    onSelect(id);
  };

  const outlineStyle = isSelected ? { outline: "2px solid red" } : {};

  return (
    <div
      onClick={handleClick}
      style={{
        border: "1px solid black",
        padding: "10px",
        margin: "5px",
        ...outlineStyle,
      }}>
      <p>{`Component ${id}`}</p>
    </div>
  );
};

export default SelectableComponent;
