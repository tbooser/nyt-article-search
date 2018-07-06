import { SAVE_ARTICLE } from "../constants";

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
            ...state.savedArticleState,
            {
              articles: action.article
            }
          ]
        }
      );
    default:
      return state;
  }
}

export default saveArticle;
