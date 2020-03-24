import { CREATE_POST } from "./types";
const initialState = {
  posts: [],
  fetchedPosts: []
};
const posts = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_POST:
      return {
        ...state,
        posts: [...state.posts, action.payload]
      };
    default:
      return { ...state };
  }
};
export default posts;