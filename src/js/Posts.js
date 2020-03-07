import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

class Posts extends Component {
  state = {
    posts: []
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(posts => posts.slice(0, 10))
      .then(posts => this.setState({ posts }));
  }

  render() {
    const posts = this.state.posts.map(post => (
      <li key={post.id}>
        <Link to={`/posts/${JSON.stringify(post.id)}`} id={post.id}>
          {post.title}
        </Link>
      </li>
    ));
    return (
      <div>
        <section className="meet-the-chefs">
          <div className="container">
            <h1>All Posts</h1>
            <ul>{posts}</ul>
          </div>
        </section>
        <Helmet>
          <title>{"All Posts Go Here"}</title>
          <meta name="description" content={"A list of posts"} />
          <meta name="keywords" content={"React Helmet Test, Lists, Things, Cats"} />
        </Helmet>
      </div>
    );
  }
}

export default Posts;
