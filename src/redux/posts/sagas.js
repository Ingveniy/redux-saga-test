import { takeEvery, put, call } from "redux-saga/effects";

import { FETCHED_POSTS_REQUEST, FETCH_POSTS } from "./types";
import { showLoader, hideLoader, showAlert } from "../app/actions";

export function* sagaWatcher() {
  yield takeEvery(FETCHED_POSTS_REQUEST, sagaWorker);
}

function* sagaWorker() {
  // return async dispatch => {
  //   try {
  //     dispatch(showLoader());

  //     dispatch({
  //       type: FETCH_POSTS,
  //       payload: posts,
  //     });
  //     dispatch(hideLoader());
  //   } catch (err) {
  //     dispatch(hideLoader());
  //     dispatch();
  //     console.error(err);
  //   }
  // };

  yield put(showLoader());

  try {
    const payload = yield call(getPosts);
    yield put({ type: FETCH_POSTS, payload });
  } catch (err) {
    yield put(showAlert("Что то пошло не так"));
    yield put(hideLoader());
  }
}

async function getPosts() {
  let response = await fetch("https://jsonplaceholder.typicode.com/posts");
  let posts = await response.json();
  return posts;
}
