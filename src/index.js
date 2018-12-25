import React from "react";
import ReactDOM from "react-dom";

import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import SortIcon from "@material-ui/icons/Sort";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListSubheader from "@material-ui/core/ListSubheader";
import Card from "@material-ui/core/Card";

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
    return (
      <Square
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

  renderSortButton() {
    const desc = this.state.historyDescending;
    const style = Object.assign({ transition: "200ms transform" }, desc ? { transform: "scaleY(-1)" } : {});
    return (
      <IconButton
        variant="contained"
        onClick={() => this.toggleDescending()}
      >
        <SortIcon style={style} />
      </IconButton>
    );
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
      const active = move === this.state.stepNumber;
      return {
        desc,
        active,
        onClick: (() => this.jumpTo(move))
      };
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
          <Typography variant="headline">
            {status}
          </Typography>
          {this.renderSortButton()}
          <MoveList items={this.state.historyDescending ? moves.reverse() : moves}></MoveList>
        </div>
      </div>
    );
  }
}

function MoveList(props) {
  const subheader = (
    <ListSubheader>Move List</ListSubheader>
  );
  const items = props.items.map(
    (item, i) =>
      <ListItem
        key={i}
        selected={item.active}
        onClick={item.onClick}
        button
        dense
      >{item.desc}</ListItem>
  );
  return (
    <Card>
      <List subheader={subheader}>{items}</List>
    </Card>
  );
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
  const winner = hits.length > 0 ? squares[hits[0][0]] : null ;
  return { winner, hits };
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);

