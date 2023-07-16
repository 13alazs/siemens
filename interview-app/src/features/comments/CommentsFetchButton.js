import React from "react";
import { useDispatch } from "react-redux";
import { getComments } from "./commentSlice";

export function CommentsFetchButton() {
  const dispatch = useDispatch();

  function fetch() {
    dispatch(getComments());
  }

  return (
    <div>
      <button onClick={() => fetch()}>Fetch comments</button>
    </div>
  );
}
