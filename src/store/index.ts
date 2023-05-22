/** @format */

import { combineReducers } from "redux";
import home from "./home/Reducers";
import user from "./user/Reducers";

export default combineReducers({ home, user });
