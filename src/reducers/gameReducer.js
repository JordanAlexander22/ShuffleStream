import { FETCH_GAME_STREAMS } from "../actions/types";

const initialState = {
  data: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_GAME_STREAMS:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
}
