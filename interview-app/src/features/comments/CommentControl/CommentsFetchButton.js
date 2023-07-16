import React from "react";
import { useDispatch } from "react-redux";
import { getComments } from "../store/commentSlice";

function CommentsFetchButton() {
  const dispatch = useDispatch();

  function fetch() {
    dispatch(getComments());
  }

  return <button onClick={() => fetch()}>Fetch comments</button>;
}

export default CommentsFetchButton;
