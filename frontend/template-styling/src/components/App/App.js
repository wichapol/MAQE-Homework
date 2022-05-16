import React from "react";

import PostCard from "../PostCard/PostCard";

import "./App.css";

function App() {
  return (
    <div className="warpper">
      <header className="content-header">
        <h1>MAQE Forum</h1>
      </header>
      <div className="content-title">
        <p>Your current timezone is : Asia/Bangkok</p>
      </div>
      <div className="card-container">
        <PostCard />
      </div>
    </div>
  );
}

export default App;
