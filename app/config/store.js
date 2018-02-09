import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";
import reducers from "../reducers";
import rootSaga from "./sagas";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

if (process.env.NODE_ENV === "development") {
	middleware.push(logger);
}

const config = {
	key: "root",
    storage, 
    //persist only theme data
    whitelist: ['theme']
};

const reducer = persistReducer(config, reducers);

export default function configureStore() {
    let store = createStore(reducer, applyMiddleware(...middleware));
	sagaMiddleware.run(rootSaga);
	let persistor = persistStore(store);
	return { persistor, store };
}