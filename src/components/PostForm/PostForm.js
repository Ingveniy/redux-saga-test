import React, { Component } from "react";
import { connect } from "react-redux";
import { createPost } from "../../redux/posts/actions";
import { showAlert } from "../../redux/app/actions";

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
    };
  }

  onSubmitHandler = e => {
    e.preventDefault();

    const { title } = this.state;
    if (!title.trim()) {
      return this.props.showAlert("Заполните заголовок записи");
    }
    const newPost = {
      title,
      id: Date.now().toString(),
    };

    this.props.createPost(newPost);
    this.setState({ title: "" });
  };

  changeInputHandler = e => {
    e.persist();
    this.setState(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  render() {
    return (
      <form onSubmit={this.onSubmitHandler}>
        <div className='form-group'>
          <label htmlFor='title'>Заголовок записи</label>
          <input
            onChange={this.changeInputHandler}
            type='text'
            className='form-control'
            id='title'
            name='title'
            value={this.state.title}
          />
        </div>
        <button type='submit' className='btn btn-success'>
          Создать
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = {
  createPost,
  showAlert,
};
export default connect(null, mapDispatchToProps)(PostForm);
