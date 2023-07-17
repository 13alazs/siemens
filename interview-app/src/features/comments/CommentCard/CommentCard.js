import React from "react";
import styles from "./CommentCard.module.css";

export function CommentCard(props) {
  return (
    <li className={styles.commentcard}>
      <h2>{props.name}</h2>
      <span>{props.email}</span>
      <p>{props.body}</p>
    </li>
  );
}
