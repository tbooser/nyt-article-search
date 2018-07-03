import { ARTICLE_SEARCH_RESPONSE } from "../constants";

const articleState = {
  articles: []
};

function articles(state = articleState, action) {
  switch (action.type) {
    case ARTICLE_SEARCH_RESPONSE:
      return Object.assign(
        {},
        {
          articles: [
            ...state.articles,
            {
              articles: action.articles
            }
          ]
        }
      );
    default:
      return state;
  }
}

export default articles;
