import * as types from './types';

export function fetchPlayersRequestAction() {
  return {
    type: types.FETCH_PLAYERS_REQUEST,
  };
}

export function fetchPlayersSuccessAction(players) {
  return {
    type: types.FETCH_PLAYERS_SUCCESS,
    players,
  };
}
