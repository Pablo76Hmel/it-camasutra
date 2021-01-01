import { combineReducers, createStore } from "redux";
import postReducer from "./postDataReducer";
import dialogReducer from "./dialogMessageDataReducer"




let redusers=combineReducers({
    postData:postReducer,
    dialogMessageData:dialogReducer
})
let store=createStore(redusers);
 
export default store
