import types from "actions/types"

const actions = {
  types,

  get: function(step) {
    return {
      type: types.GET,
      step
    };
  },

  put: function(pos) {
    return {
      type: types.PUT,
      pos
    };
  }
};

export default actions;
