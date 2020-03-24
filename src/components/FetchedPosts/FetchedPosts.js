import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchPosts } from "../../redux/posts/actions";
import Post from "../Post";
import Loader from "../Loader";
export default ({}) => {
  const dispatch = useDispatch();
  const posts = useSelector(state => state.posts.fetchedPosts) || [];
  const loading = useSelector(state => state.app.loading) || false;

  if (loading) {
    return <Loader />;
  }
  if (!posts.length) {
    return (
      <button
        onClick={() => dispatch(fetchPosts())}
        className='btn btn-primary'
      >
        Загрузить
      </button>
    );
  }
  return posts.map((postData, postIndex) => (
    <Post key={"post" + postData.id} {...postData} />
  ));
};
