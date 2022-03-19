import { combineReducers } from "redux";
import summaryReducer from "./reducer/summary.reducer";

const rootReducer = combineReducers({
  summary: summaryReducer,
});

export default rootReducer;
