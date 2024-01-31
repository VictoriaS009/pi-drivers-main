import { legacy_createStore as createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import reducer from "./reducer";

const composedEnhacer = composeWithDevTools(applyMiddleware(thunk));

const store = createStore(reducer, composedEnhacer);

export default store;
