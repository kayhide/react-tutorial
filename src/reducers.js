import { combineReducers } from "redux";

import gameReducers from "reducers/gameReducers";

const id = (state, action) => state;

const game = (state, action) =>
      state ? (gameReducers[action.type] || id)(state, action) : null;

export default combineReducers({
  game
});
