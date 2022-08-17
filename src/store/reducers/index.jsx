import { combineReducers } from "redux";
import postReducer from "./postReducer";
import userReducer from "./userReducer";
import commentReducer from "./commentReducer";
import albumsReducer from "./albumsReducer";
import photosReducer from "./photosReducer";

export default combineReducers({
    postReducer,
    userReducer,
    commentReducer,
    albumsReducer,
    photosReducer
})