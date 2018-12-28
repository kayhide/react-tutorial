import times from "lodash/times";
import range from "lodash/range";
import React from "react";

import Grid from '@material-ui/core/Grid';

import SquareCell from "components/SquareCell";

function Board(props) {
  return (
    <div>
      {
        times(3).map(j => (
          <Grid key={`row-${j}`} container>
            {
              range(j * 3, j * 3 + 3).map(x => (
                <Grid key={x} item xs>
                  <SquareCell
                    value={props.squares[x]}
                    highlight={props.highlights.has(x)}
                    onClick={() => props.onClick(x)}
                  />
                </Grid>
              ))
            }
          </Grid>
        ))
      }
    </div>
  );
};

export default Board;
