import React from "react";
import { CommentsFetchButton } from "./CommentsFetchButton";
import styles from "./CommentControl.module.css";

export function CommentControl(props) {
  return (
    <div className={styles.commentControl}>
      <CommentsFetchButton />
      <button onClick={props.toggleComments}>
        {props.showComments ? "Hide comments" : "Show comments"}
      </button>
      <button onClick={props.toggleGraph}>
        {props.showGraph ? "Hide graph" : "Show graph"}
      </button>
    </div>
  );
}
