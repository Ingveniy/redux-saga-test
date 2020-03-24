import { combineReducers } from "redux";

import posts from "./posts/reducer";
import app from "./app/reducer";

const rootReducer = combineReducers({ posts, app });
export default rootReducer;
