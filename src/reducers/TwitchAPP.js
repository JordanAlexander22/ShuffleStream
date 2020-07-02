// import { FETCH_GAME_STREAMS } from "../actions/types";

// const initialState = {
//   streams: [],
// };

// export default function(state = initialState, action) {
//   switch (action.type) {
//     case FETCH_GAME_STREAMS:
//       return {
//         ...state,
//         streams: action.payload,
//       };
//     default:
//       return state;
//   }
// }

const initialState = {
  status: "",
  streams: [],
  error: "",
};

function TwitchApp(state = initialState, action) {
  switch (action.type) {
    case "FETCH_REQUEST":
      const requested = Object.assign({}, state, {
        status: action.status,
      });
      return requested;
    case "FETCH_SUCCESS":
      const successful = Object.assign({}, state, {
        status: action.status,
        streams: action.streams,
      });
      return successful;
    case "FETCH_FAILURE":
      const failed = Object.assign({}, state, {
        status: action.status,
        error: action.error,
      });
      return failed;
    default:
      return state;
  }
}
export default TwitchApp;
