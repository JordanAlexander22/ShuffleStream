import { createStore } from "redux";
import TwitchApp from "./reducers/TwitchAPP";

let Store = createStore(
    TwitchApp,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
    
export default Store;
