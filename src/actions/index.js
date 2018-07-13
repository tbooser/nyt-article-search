import {
  ARTICLE_SEARCH_RESPONSE,
  SET_CURRENT_SEARCH_TERM,
  SAVE_ARTICLE,
  BOOKMARK_ARTICLE,
  UNSAVE_ARTICLE,
  REMOVE_BOOKMARKED_ARTICLE
} from "../constants";

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
      "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=65c543eb88c7453fb4a7ee8f300ea807&q=" +
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

export const saveArticle = (article, articleId) => {
  console.log(article, articleId, "ARTICLE ID");
  return dispatch => {
    dispatch({ article, type: SAVE_ARTICLE });
    dispatch(bookmarkArticle(articleId));
  };
};

export const unsaveArticle = (article, articleId) => {
  console.log(article, articleId, "REMOVE FROM SAVED");
  return dispatch => {
    dispatch({ article, type: UNSAVE_ARTICLE });
    dispatch(removeBookmarkedArticle(articleId));
  };
};

export const removeBookmarkedArticle = articleId => {
  console.log("REMOVE_BOOKMARKED_ARTICLE");
  return dispatch => {
    dispatch({ articleId, type: REMOVE_BOOKMARKED_ARTICLE });
  };
};

export const bookmarkArticle = articleId => {
  console.log(articleId);
  return dispatch => {
    dispatch({ articleId, type: BOOKMARK_ARTICLE });
  };
};
