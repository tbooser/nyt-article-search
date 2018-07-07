import {
  ARTICLE_SEARCH_RESPONSE,
  SET_CURRENT_SEARCH_TERM,
  SAVE_ARTICLE
} from "../constants";
import * as keys from "./keys.js";

export const articleSearchResponse = articles => {
  return dispatch => {
    dispatch({ articles, type: ARTICLE_SEARCH_RESPONSE });
  };
};

export const setCurrentSearchTerm = searchTerm => {
  return dispatch => {
    dispatch({ searchTerm, type: SET_CURRENT_SEARCH_TERM });
  };
};

export const articleSearch = searchTerm => {
  return dispatch => {
    fetch(
      "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" +
        keys.default +
        "&q=" +
        searchTerm
    )
      .then(response => {
        return response.json();
      })
      .then(response => {
        dispatch(articleSearchResponse(response));
        dispatch(setCurrentSearchTerm(searchTerm));
      });
  };
};

export const saveArticle = article => {
  return dispatch => {
    console.log("article", article);
    dispatch({ article, type: SAVE_ARTICLE });
  };
};
