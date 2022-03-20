import { createStore, applyMiddleware, compose } from "redux";
import { createLogger } from "redux-logger";
import rootReducer from "./rootReducer";
import { persistStore } from "redux-persist";

const loogerMiddleware = createLogger();
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(loogerMiddleware))
);
const persistor = persistStore(store);
export { store, persistor };
