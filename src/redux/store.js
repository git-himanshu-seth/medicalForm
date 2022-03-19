import { createStore, applyMiddleware, compose } from "redux";
// import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
import rootReducer from "./rootReducer";

const loogerMiddleware = createLogger();
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(loogerMiddleware))
);
