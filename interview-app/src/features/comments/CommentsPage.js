import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getComments, setFilter } from "./store/commentSlice";
import { Comments } from "./Comments";
import styles from "./Comments.module.css";
import CommentsChart from "./CommentsChart/CommentsChart";
import { CommentControl } from "./CommentControl/CommentControl";

export function CommentsPage() {
  const dispatch = useDispatch();
  const [showComments, setShowComments] = useState(true);
  const [showGraph, setShowGraph] = useState(false);
  const comments = useSelector((state) => state.comment);
  const currentFilter = useSelector((state) => state.comment.filter);
  const [postId, setPostId] = useState(currentFilter);

  useEffect(() => {
    dispatch(getComments());
  }, []);

  function toggleComments() {
    setShowComments(!showComments);
  }

  function toggleGraph() {
    setShowGraph(!showGraph);
  }

  function filter() {
    dispatch(setFilter(postId));
  }

  return (
    <div className={styles.commentPage}>
      <h1>Comments</h1>
      <CommentControl
        filter={filter}
        setFilter={(e) => setPostId(e.target.value)}
        showComments={showComments}
        toggleComments={toggleComments}
        showGraph={showGraph}
        toggleGraph={toggleGraph}
      />
      {comments.loading && <div>Loading...</div>}
      {!comments.loading && comments.error ? <div>Error</div> : null}
      {!comments.loading && comments.value?.length ? (
        <>
          {showComments && <Comments />}
          {showGraph && <CommentsChart />}
        </>
      ) : (
        <div className={styles.noData}>
          No Comment data is currently available.
        </div>
      )}
    </div>
  );
}
