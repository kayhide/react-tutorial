import actions from "actions";

const gameReducers = {
  [actions.types.GET]: (state, action) => {
    const { moves } = state;
    const { step } = action;
    if (0 <= step && step < moves.length) {
      return {
        ...state,
        currentStep: step
      };
    }
    return state;
  },

  [actions.types.PUT]: (state, action) => {
    const { moves, currentStep } = state;
    const { pos } = action;
    const current = moves[currentStep];
    if (!current.winning.winner && !current.squares[pos]) {
      const squares = [...current.squares];
      squares[pos] = nextPlayer(currentStep);
      const winning = calculateWinner(squares);
      return {
        moves: [...moves.slice(0, currentStep + 1), { squares, pos, winning }],
        currentStep: currentStep + 1
      };
    }
    return state;
  }
};


function nextPlayer(currentStep) {
  return (currentStep % 2) === 0 ? 'X' : 'O';
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

export default gameReducers;
