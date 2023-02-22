import { combineReducers } from "redux";
import bagReducer from "./bagReducer";
import checkoutReducer from "./checkoutReducer";
import productReducer from "./productReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
    user: userReducer,
    product: productReducer,
    bag: bagReducer,
    checkout: checkoutReducer
})

export default rootReducer