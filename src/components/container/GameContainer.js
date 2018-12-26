import React from "react";


function withGameContainer(Rep) {
  return class GameContainer extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        history: [{ squares: Array(9).fill(null), winning: { winner: null }}],
        stepNumber: 0,
        xIsNext: true
      };
    }

    handleClick(i) {
      const history = this.state.history.slice(0, this.state.stepNumber + 1);
      const current = history[this.state.stepNumber];
      const squares = current.squares.slice();
      if (!current.winning.winner && !squares[i]) {
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        const winning = calculateWinner(squares);
        this.setState({
          history: history.concat([{ squares, pos: i, winning }]),
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

    render() {
      return (
        <Rep
          history={this.state.history}
          stepNumber={this.state.stepNumber}
          onCellClick={i => this.handleClick(i)}
          onMoveSelected={i => this.jumpTo(i)}
          {...this.props}
        />
      );
    }
  }
};

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

export default withGameContainer;
