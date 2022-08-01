import React, { useState } from "react";
import "./App.css";
import Comment from "./comment";
import "./post.css";

export default function Post() {
  //state
  const [post, setPost] = useState("");
  const [allPost, setAllPost] = useState([]);

  //Function
  const onSubmitPost = (e) => setAllPost([post, ...allPost]);

  //Element
  const postElement = allPost.map((myPost, index) => (
    <div key={index} className="my-Post">
      <p>{myPost}</p>
      <hr />
      <Comment />
    </div>
  ));

  return (
    <div className="post-app">
      <div className="post">
        <input
          className="post-box"
          value={post}
          placeholder="What on your mind?"
          onChange={(e) => setPost(e.target.value)}
        />

        <button
          positive
          type="submit"
          className="post-btn"
          onClick={() => onSubmitPost()}
        >
          Post
        </button>
      </div>

      <div className="posted">{postElement}</div>
    </div>
  );
}
