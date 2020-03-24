import React from "react";
import PostForm from "../PostForm";
import Posts from "../Posts";
import FetchedPosts from "../FetchedPosts";
import { connect } from "react-redux";
import Alert from "../Alert";

function App({ alert }) {
  return (
    <div className='container pt-3'>
      {alert && <Alert alertText={alert} />}

      <div className='row'>
        <div className='col'>
          <PostForm />
        </div>
      </div>
      <div className='row'>
        <div className='col'>
          <h2>Синхронные записи</h2>
          <Posts />
        </div>
        <div className='col'>
          <h2>Асинхронные записи</h2>
          <FetchedPosts />
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = ({ app }) => ({ alert: app.alert });

export default connect(mapStateToProps, null)(App);
