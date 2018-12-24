import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function Square(props) {
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

class Board extends React.Component {
  renderSquare(i) {
    return (<Square
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

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [{ squares: Array(9).fill(null) }],
      historyDescending: false,
      stepNumber: 0,
      xIsNext: true
    };
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[this.state.stepNumber];
    const squares = current.squares.slice();
    if (!calculateWinner(squares).winner && !squares[i]) {
      squares[i] = this.state.xIsNext ? 'X' : 'O';
      this.setState({
        history: history.concat([{ squares, pos: i }]),
        stepNumber: history.length,
        xIsNext: !this.state.xIsNext});
    }
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0
    });
  }

  toggleDescending() {
    this.setState({
      historyDescending: !this.state.historyDescending
    });
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const { winner, hits } = calculateWinner(current.squares);

    const status = winner ?
          `Winner: ${winner}` :
          ( this.state.stepNumber === 9 ?
            "Draw" : `Next player: ${this.state.xIsNext ? 'X' : 'O'}`);

    const moves = history.map(({ pos }, move) => {
      const desc = move === 0 ? "Go to game start" : `Go to move #${move} (${pos % 3}, ${Math.floor(pos / 3)})`;
      const style = move === this.state.stepNumber ? { fontWeight: "bold" } : {};
      return (
          <li key={move} style={style}>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
          </li>
      );
    });

    return (
      <div className="game">
        <div className="game-board">
        <Board
      squares={current.squares}
      highlights={new Set(hits.flat())}
      onClick={(i) => this.handleClick(i)}
        />
        </div>
        <div className="game-info">
          <div>{status}</div>
        <button onClick={() => this.toggleDescending()}>{this.state.historyDescending ? "↓" : "↑"}</button>
        <ol>{this.state.historyDescending ? moves.reverse() : moves}</ol>
        </div>
      </div>
    );
  }
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  const hits = lines.filter(line => {
    const [a, b, c] = line.map(i => squares[i]);
    return (a !== null && a === b && b === c && c === a);
  });
  console.log(hits);
  const winner = hits.length > 0 ? squares[hits[0][0]] : null ;
  return { winner, hits };
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);

