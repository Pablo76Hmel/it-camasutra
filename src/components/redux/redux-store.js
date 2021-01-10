import { combineReducers, createStore } from "redux";
import postReducer from "./postDataReducer";
import dialogReducer from "./dialogMessageDataReducer"
import usersReducer from "./usersReducer";




let redusers=combineReducers({
    postData:postReducer,
    dialogMessageData:dialogReducer,
    usersPage:usersReducer
})
let store=createStore(redusers);
 
export default store
