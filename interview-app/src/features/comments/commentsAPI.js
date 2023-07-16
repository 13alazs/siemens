import axios from "axios";

export function fetchComments() {
  return axios.get("https://jsonplaceholder.typicode.com/comments");
}
