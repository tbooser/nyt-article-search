import { SAVE_ARTICLE } from "../constants";

const savedArticleState = {
  articles: []
};

function saveArticle(state = savedArticleState, action) {
  switch (action.type) {
    case SAVE_ARTICLE:
      console.log("action", action, action.article);
      return Object.assign(
        {},
        {
          articles: [
            ...state.articles,
            {
              article: action.article
            }
          ]
        }
      );
    default:
      return state;
  }
}

export default saveArticle;
