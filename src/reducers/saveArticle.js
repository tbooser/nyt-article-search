import { SAVE_ARTICLE, UNSAVE_ARTICLE } from "../constants";

const savedArticleState = {
  articles: []
};

function saveArticle(state = savedArticleState, action) {
  switch (action.type) {
    case SAVE_ARTICLE:
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
    case UNSAVE_ARTICLE:
      return Object.assign(
        {},
        {
          articles: [...state.articles].filter((article, index) => {
            return article.article._id !== action.article._id;
          })
        }
      );
    default:
      return state;
  }
}

export default saveArticle;

