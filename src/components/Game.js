import React from "react";

import Typography from "@material-ui/core/Typography";

import Board from "components/Board";
import MoveList from "components/MoveList";
import withGameContainer from "components/container/GameContainer";

function Game(props) {
  const { history, stepNumber } = props;
  const current = history[stepNumber];
  const { winner, hits } = current.winning;

  const status = winner ?
        `Winner: ${winner}` :
        ( stepNumber === 9 ?
          "Draw" : `Next player: ${props.xIsNext ? 'X' : 'O'}`);

  const moves = history.map(({ pos }, move) => {
    const desc = move === 0 ? "Go to game start" : `Go to move #${move} (${pos % 3}, ${Math.floor(pos / 3)})`;
    const active = move === stepNumber;
    return { desc, active };
  });



  return (
    <div className="game">
      <div className="game-board">
        <Board
          squares={current.squares}
          highlights={new Set((hits || []).flat())}
          onClick={i => props.onCellClick(i)}
        />
      </div>
      <div className="game-info">
        <Typography variant="headline">
          {status}
        </Typography>
        <MoveList
          items={moves}
          onSelected={i => props.onMoveSelected(i)}
        />
      </div>
    </div>
  );
};

export default withGameContainer(Game);
