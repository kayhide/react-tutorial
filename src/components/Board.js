import React from "react";

import SquareCell from "components/SquareCell";

class Board extends React.Component {
  renderSquare(i) {
    return (
      <SquareCell
        key={i}
        value={this.props.squares[i]}
        highlight={this.props.highlights.has(i)}
        onClick={() => this.props.onClick(i)}
      />
    );
  }

  render() {
    const row = (j) => {
      const cells = Array.from(Array(3).keys()).map(i => this.renderSquare(j * 3 + i));
      return (<div key={`row-${j}`} className="board-row">{cells}</div>);
    };

    const rows = Array.from(Array(3).keys()).map(j => row(j));
    return (<div>{rows}</div>);
  }
}

export default Board;
