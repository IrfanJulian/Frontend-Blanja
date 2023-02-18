import { combineReducers } from "redux";
import bagReducer from "./bagReducer";
import productReducer from "./productReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
    user: userReducer,
    product: productReducer,
    bag: bagReducer
})

export default rootReducer