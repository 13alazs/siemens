import React from "react";
import { useSelector } from "react-redux";
import { CommentCard } from "./CommentCard";
import styles from "./Comments.module.css";

export function Comments() {
  const comments = useSelector((state) => state.comment);

  return (
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
  );
}
