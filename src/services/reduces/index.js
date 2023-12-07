// this is use to combine all the reducer in one
import {combineReducers} from 'redux';
import cardItems from "./reducer";

export default combineReducers({
    cardItems,
})