import React from "react";
import { CommentsFetchButton } from "./features/comments/CommentsFetchButton";
import { Comments } from "./features/comments/Comments";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CommentsFetchButton />
      </header>
      <main>
        <Comments />
      </main>
    </div>
  );
}

export default App;
