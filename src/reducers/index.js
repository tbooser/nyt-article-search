import { combineReducers } from "redux";
import articles from "./articles";
import currentSearchTerm from "./setCurrentSearchTerm";

export default combineReducers({
	articles,
	currentSearchTerm
});
