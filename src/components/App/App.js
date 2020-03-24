import React from "react";
import PostForm from "../PostForm";
import Posts from "../Posts";
import FetchedPosts from "../FetchedPosts";

function App() {
  return (
    <div className="container pt-3">
      <div className="row">
        <div className="col">
          <PostForm />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h2>Синхронные записи</h2>
          <Posts />
        </div>
        <div className="col">
          <h2>Асинхронные записи</h2>
          <FetchedPosts />
        </div>
      </div>
    </div>
  );
}

export default App;
