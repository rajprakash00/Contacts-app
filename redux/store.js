import { createStore, applyMiddleware } from "redux";

import reducer, { authReducer } from "./reducer";
import thunk from "redux-thunk";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

const persistConfig = {
  key: "main",
  storage,
  blacklist: ["auth"], //this is the main mistake i was doing while persisting the contacts i was persisting the auth info too
};

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = createStore(persistedReducer, applyMiddleware(thunk));
export const persistor = persistStore(store);

/*
const store = createStore(reducer);

store.dispatch(addContact({ name: "raj p", phone: "1234567890" }));
store.dispatch(addContact({ name: "shyam j", phone: "1234567890" }));
store.dispatch(addContact({ name: "hari k", phone: "1234567890" }));

console.log(store.getState());

export default store;
*/
