import { SET_CURRENT_SEARCH_TERM } from "../constants";

const searchTermState = {
  terms: []
};

function currentSearchTerm(state = searchTermState, action) {
  switch (action.type) {
    case SET_CURRENT_SEARCH_TERM:
      return Object.assign(
        {},
        {
          terms: [
            ...state.terms,
            {
              terms: action.searchTerm
            }
          ]
        }
      );
    default:
      return state;
  }
}

export default currentSearchTerm;
