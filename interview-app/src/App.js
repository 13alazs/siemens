import React from "react";
import { CommentsFetchButton } from "./features/comments/CommentsFetchButton";
import { CommentsPage } from "./features/comments/CommentsPage";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <main>
        <CommentsPage />
      </main>
    </div>
  );
}

export default App;
