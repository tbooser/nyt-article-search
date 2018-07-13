import { BOOKMARK_ARTICLE } from "../constants";

const bookmarkState = {
  bookmarks: []
};

function bookmarks(state = bookmarkState, action) {
  switch (action.type) {
    case BOOKMARK_ARTICLE:
      return Object.assign(
        {},
        {
          bookmarks: [
            ...state.bookmarks,
            {
              bookmark: action.articleId
            }
          ]
        }
      );
    default:
      return state;
  }
}

export default bookmarks;
