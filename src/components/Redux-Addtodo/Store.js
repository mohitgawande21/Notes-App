import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import thunk from "redux-thunk"
import { applyMiddleware } from "redux";
import {NoteReducer} from "./Redux/NoteReducer"
const store = createStore(NoteReducer, composeWithDevTools(applyMiddleware(logger,thunk)))


export default store
