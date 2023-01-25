import cartReducer from "./cartReducer";
import { combineReducers } from "redux";

let reducers = combineReducers({
    cartReducer : cartReducer
})

let rootReducers = (state, actions) =>{
    return reducers(state, actions);
}

export default rootReducers;