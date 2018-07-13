import { BOOKMARK_ARTICLE, REMOVE_BOOKMARKED_ARTICLE } from "../constants";

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
              id: action.articleId
            }
          ]
        }
      );
    case REMOVE_BOOKMARKED_ARTICLE:
      return Object.assign(
        {},
        {
          bookmarks: [...state.bookmarks].filter(bookmark => {
            return bookmark.id !== action.articleId;
          })
        }
      );
    default:
      return state;
  }
}

export default bookmarks;
