import { CREATE_POST, FETCHED_POSTS_REQUEST } from "./types";

import { showLoader, hideLoader, showAlert } from "../app/actions";
export function createPost(post) {
  return {
    type: CREATE_POST,
    payload: post,
  };
}

export function fetchPosts() {
  return {
    FETCHED_POSTS_REQUEST,
  };
}
