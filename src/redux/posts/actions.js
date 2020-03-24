import { CREATE_POST, FETCH_POSTS } from "./types";

import { showLoader, hideLoader } from "../app/actions";
export function createPost(post) {
  return {
    type: CREATE_POST,
    payload: post,
  };
}

export function fetchPosts() {
  return async dispatch => {
    try {
      dispatch(showLoader());
      let response = await fetch("https://jsonplaceholder.typicode.com/posts");
      let posts = await response.json();
      dispatch({
        type: FETCH_POSTS,
        payload: posts,
      });
      dispatch(hideLoader());
    } catch (err) {
      dispatch(hideLoader());
      console.error(err);
    }
  };
}
