import { createStore } from "redux";
import rootReducer from "./reducers/index";
import contacts from "./modules/contacts";

const defaultState = {
  contacts
};

const store = createStore(
  rootReducer,
  defaultState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

window.store = store;

export default store;