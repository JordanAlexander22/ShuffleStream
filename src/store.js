// import {applyMiddleware, createStore} from 'redux';

// import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
// import rootReducer from './reducers';
// import thunk from 'redux-thunk';

// const initialState = {};

// const middleware = [thunk];

// const store = createStore(
//     rootReducer,
//     initialState,
//     composeWithDevTools(
//         applyMiddleware(...middleware),
//     )
// )

// export default store;

import { createStore } from "redux";
import TwitchApp from "./reducers/TwitchAPP";

let Store = createStore(TwitchApp);
export default Store;
