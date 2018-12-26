import React from "react";
import { withRouter, Redirect } from "react-router";

import history from "../../history";

function withGameContainer(Rep) {
  return withRouter(
    class GameContainer extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
          moves: [{ squares: Array(9).fill(null), winning: { winner: null }}],
        };
      }

      currentStep() {
        return this.props.match.params.move ? Number(this.props.match.params.move) : 0;
      }

      nextPlayer() {
        return (this.currentStep() % 2) === 0 ? 'X' : 'O';
      }

      handleClick(pos) {
        const current = this.state.moves[this.currentStep()];
        if (!current.winning.winner && !current.squares[pos]) {
          const squares = current.squares.slice();
          squares[pos] = this.nextPlayer();
          const winning = calculateWinner(squares);
          const moves = this.state.moves
                .slice(0, this.currentStep() + 1)
                .concat([{ squares, pos, winning }]);
          this.setState({ moves });
          history.push(`/moves/${this.currentStep() + 1}`);
        }
      }

      render() {
        if (this.currentStep() >= this.state.moves.length) {
          return <Redirect to="/" />
        }
        return (
          <Rep
            game={Object.assign({ stepNumber: this.currentStep(),
                                  nextPlayer: this.nextPlayer()
                                },
                                this.state
                               )}
            location={this.props.location}
            onCellClick={i => this.handleClick(i)}
            {...this.props}
          />
        );
      }
    }
  );
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
