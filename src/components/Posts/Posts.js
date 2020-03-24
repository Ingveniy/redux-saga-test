import React from "react";
import { connect } from "react-redux";
import Post from "../Post";

const Posts = ({ posts = [] }) => {
  console.log(posts, "posts");

  if (!posts.length) {
    return <p className="text-center">Нет записей</p>;
  }
  return posts.map((postData, postIndex) => (
    <Post key={"post" + postIndex} {...postData} />
  ));
};

const mapStateToProps = ({ posts }) => ({ posts });
const mapDispatchToProps = () => ({});
export default connect(mapStateToProps, mapDispatchToProps)(Posts);
