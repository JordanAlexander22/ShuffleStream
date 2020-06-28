import { FETCH_GAME_STREAMS } from "../actions/types";

const initialState = {
  streams: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_GAME_STREAMS:
      return {
        ...state,
        streams: action.payload,
      };
    default:
      return state;
  }
}
