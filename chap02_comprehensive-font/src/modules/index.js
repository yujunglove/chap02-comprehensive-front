import { combineReducers } from "redux";
import memberReducer from "./MemberModule";
import productReducer from "./ProductModule";

const rootReducer = combineReducers({
    productReducer,memberReducer
});

export default rootReducer;