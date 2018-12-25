import React from "react";

function SquareCell(props) {
  const style = props.highlight ? { backgroundColor: 'yellow' } : null ;
  return (
    <button
      className="square"
      style={style}
      onClick={props.onClick}
    >
      {props.value}
    </button>
  );
}

export default SquareCell;
