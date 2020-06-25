import { FETCH_GAME_STREAMS } from "../actions/types";

const initialState = {
  items: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_GAME_STREAMS:
      return {
        ...state,
        items: action.payload,
      };
    default:
      return state;
  }
}
