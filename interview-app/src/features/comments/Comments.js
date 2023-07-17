import React from "react";
import { useSelector } from "react-redux";
import CommentCard from "./CommentCard/CommentCard";
import { selectComments } from "./store/commentSlice";
import styles from "./Comments.module.css";

function Comments() {
  const filteredComments = useSelector(selectComments);

  return (
    <div className={styles.commentList}>
      {filteredComments && filteredComments.length > 0 ? (
        <ul>
          {filteredComments.map((comment) => (
            <CommentCard
              key={comment.id}
              name={comment.name}
              email={comment.email}
              body={comment.body}
            />
          ))}
        </ul>
      ) : (
        <>No data available for this filter.</>
      )}
    </div>
  );
}

export default Comments;
