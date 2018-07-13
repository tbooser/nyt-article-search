import { combineReducers } from "redux";
import articles from "./articles";
import currentSearchTerm from "./setCurrentSearchTerm";
import saveArticle from "./saveArticle";
import bookmarks from "./bookmarks";

export default combineReducers({
	articles,
	currentSearchTerm,
	saveArticle,
	bookmarks
});
