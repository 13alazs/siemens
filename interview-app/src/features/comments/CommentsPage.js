import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getComments, selectComments } from "./commentSlice";
import { Comments } from "./Comments";
import styles from "./Comments.module.css";
import CommentsChart from "./CommentsChart";
import { CommentControl } from "./CommentControl";

export function CommentsPage() {
  const comments = useSelector((state) => state.comment);
  const dispatch = useDispatch();
  const [showComments, setShowComments] = useState(true);
  const [showGraph, setShowGraph] = useState(false);

  useEffect(() => {
    dispatch(getComments());
  }, []);

  function toggleComments() {
    setShowComments(!showComments);
  }

  function toggleGraph() {
    setShowGraph(!showGraph);
  }

  return (
    <div className={styles.comments}>
      <h1>Comments</h1>
      <CommentControl
        showComments={showComments}
        toggleComments={toggleComments}
        showGraph={showGraph}
        toggleGraph={toggleGraph}
      />
      {showComments && <Comments />}
      {showGraph && <CommentsChart />}
    </div>
  );
}
