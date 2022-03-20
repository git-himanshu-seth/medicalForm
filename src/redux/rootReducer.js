import { combineReducers } from "redux";
import summaryReducer from "./reducer/summary.reducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["summary"],
};
const rootReducer = combineReducers({
  summary: summaryReducer,
});
export default persistReducer(persistConfig, rootReducer);
