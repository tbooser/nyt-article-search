import { combineReducers } from "redux";
import articles from "./articles";
import currentSearchTerm from "./setCurrentSearchTerm";
import saveArticle from "./saveArticle";

export default combineReducers({
	articles,
	currentSearchTerm,
	saveArticle
});
