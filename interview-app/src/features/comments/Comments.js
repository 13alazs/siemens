import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getComments, selectComments } from "./commentSlice";
import { CommentCard } from "./CommentCard";
import styles from "./Comments.module.css";

export function Comments() {
  const comments = useSelector((state) => state.comment);
  const dispatch = useDispatch();
  const [show, setShow] = useState(true);

  useEffect(() => {
    dispatch(getComments());
  }, []);

  function toggleShow() {
    setShow(!show);
  }

  return (
    <div className={styles.comments}>
      <h1>Comments</h1>
      <button onClick={toggleShow}>
        {show ? "Hide comments" : "Show comments"}
      </button>
      {show && (
        <div className={styles.commentList}>
          {comments.loading && <div>Loading...</div>}
          {!comments.loading && comments.error ? <div>Error</div> : null}
          {!comments.loading && comments.value?.length ? (
            <ul>
              {comments.value.map((comment) => (
                <CommentCard
                  key={comment.id}
                  name={comment.name}
                  email={comment.email}
                  body={comment.body}
                />
              ))}
            </ul>
          ) : null}
        </div>
      )}
    </div>
  );
}
