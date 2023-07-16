import React from "react";
import CommentsFetchButton from "./CommentsFetchButton";
import { useSelector } from "react-redux";
import { selectComments } from "../store/commentSlice";
import styles from "./CommentControl.module.css";

function CommentControl(props) {
  const commentCount = useSelector(selectComments).length;

  return (
    <div className={styles.commentControl}>
      <CommentsFetchButton />
      <label htmlFor="postIdInput">Filter by postId</label>
      <input id="postIdInput" onChange={props.setFilter}></input>
      <button onClick={props.filter}>Apply</button>
      <label>Count: {commentCount}</label>
      <button onClick={props.toggleComments}>
        {props.showComments ? "Hide comments" : "Show comments"}
      </button>
      <button onClick={props.toggleGraph}>
        {props.showGraph ? "Hide graph" : "Show graph"}
      </button>
    </div>
  );
}

export default CommentControl;
