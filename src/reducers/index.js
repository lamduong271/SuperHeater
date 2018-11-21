import {combineReducers} from "redux";
import Authenticate from "./Authenticate";
import Rooms from './Rooms';
const reducer = combineReducers({
    Authenticate,
    Rooms
});
export default reducer;