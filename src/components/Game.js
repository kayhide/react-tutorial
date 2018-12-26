import React from "react";

import Typography from "@material-ui/core/Typography";
import Grid from '@material-ui/core/Grid';

import Board from "components/Board";
import MoveList from "components/MoveList";
import withGameContainer from "components/container/GameContainer";

function Game(props) {
  const { history, stepNumber, xIsNext } = props.game;
  const current = history[stepNumber];
  const { winner, hits } = current.winning;
  const highlights = new Set((hits || []).flat());

  const status = winner ?
        `Winner: ${winner}` :
        ( stepNumber === 9 ?
          "Draw" : `Next player: ${xIsNext ? 'X' : 'O'}`);

  const moves = history.map(({ pos }, move) => {
    const desc = move === 0 ? "Game Start" : `Move #${move} (${pos % 3}, ${Math.floor(pos / 3)})`;
    const active = move === stepNumber;
    return { desc, active };
  });


  return (
    <div>
      <Grid container direction="row" alignItems="stretch" spacing={24}>
        <Grid item xs={12}>
          <Typography variant="headline">
            {status}
          </Typography>
        </Grid>
        <Grid item xs className="game-board">
          <Grid container direction="row" justify="center" alignItems="center">
            <Grid item>
              <Board
                squares={current.squares}
                highlights={highlights}
                onClick={i => props.onCellClick(i)}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs>
          <MoveList
            items={moves}
            onSelected={i => props.onMoveSelected(i)}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default withGameContainer(Game);
