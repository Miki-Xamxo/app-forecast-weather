import { combineReducers } from "redux";

import weather from "./weather";
import inputValue from './input-value'
import cities from "./cities";


const rootReducer = combineReducers({
    weather,
    inputValue,
    cities
})

export default rootReducer