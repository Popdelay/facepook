import React, { useState } from "react";
import "./App.css";
import "./comment.css";

export default function Comment() {
  //state
  const [comment, setComment] = useState("");
  const [allComment, setAllComment] = useState([]);

  const onComment = (e) => setAllComment([...allComment, comment]);

  //Element
  const commentElement = allComment.map((myComment, index) => (
    <div key={index} className="all-Comment">
      <p>{myComment}</p>
    </div>
  ));
  return (
    <div className="comment-app">
      <input
        className="comment"
        value={comment}
        placeholder="Write your comment"
        onChange={(e) => setComment(e.target.value)}
        onKeyPress={(e) => e.key === "Enter" && onComment()}
      />
      <div className="all-Comment">{commentElement}</div>
    </div>
  );
}
