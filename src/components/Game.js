import React from "react";
import { connect } from "react-redux";

import Typography from "@material-ui/core/Typography";
import Grid from '@material-ui/core/Grid';

import Board from "components/Board";
import MoveList from "components/MoveList";

import actions from "actions";

function Game(props) {
  const { moves, currentStep } = props;
  const current = moves[currentStep];
  const { winner, hits } = current.winning;
  const highlights = new Set((hits || []).flat());
  const nextPlayer = (currentStep % 2) === 0 ? 'X' : 'O';

  const status = winner ?
        `Winner: ${winner}` :
        ( currentStep === 9 ?
          "Draw" : `Next player: ${nextPlayer}`);

  const items = moves.map(({ pos }, move) => {
    const desc = move === 0 ? "Game Start" : `Move #${move} (${pos % 3}, ${Math.floor(pos / 3)})`;
    const active = move === currentStep;
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
        <Grid item xs={12} sm className="game-board">
          <Grid container direction="row" justify="center" alignItems="center">
            <Grid item>
              <Board
                squares={current.squares}
                highlights={highlights}
                onClick={props.put}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs sm>
          <MoveList items={items} />
        </Grid>
      </Grid>
    </div>
  );
};

export default connect(
  ({ game }) => game,
  { put: actions.put }
)(Game);
