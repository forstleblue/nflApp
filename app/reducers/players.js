import * as types from '../actions/types';

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case types.GET_PLAYERS:
      return action.players;
    default:
      return state;
  }
};
