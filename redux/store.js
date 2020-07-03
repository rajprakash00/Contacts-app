import { createStore } from "redux";

import { addContact } from "./actions";
import reducer from "./reducer";

const store = createStore(reducer);

store.dispatch(addContact({ name: "raj p", phone: "1234567890" }));
store.dispatch(addContact({ name: "shyam j", phone: "1234567890" }));
store.dispatch(addContact({ name: "hari k", phone: "1234567890" }));

console.log(store.getState());

export default store;
