import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import rootReducer from "./root-reducer";
import { persistStore } from "redux-persist";
const middleWares = [logger, thunk];
const store = createStore(rootReducer, applyMiddleware(...middleWares));

const persistor = persistStore(store);

export { persistor, store };
