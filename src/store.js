import { createStore } from "redux";

import reducers from "./reducers";

const initialState = {
  game: {
    moves: [{ squares: Array(9).fill(null), winning: { winner: null }}],
    currentStep: 0
  }
};

export default createStore(
  reducers,
  initialState,
  // eslint-disable-next-line no-underscore-dangle
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
