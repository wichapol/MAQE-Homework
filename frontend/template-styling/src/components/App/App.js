import React, { useState, useEffect } from "react";

import PostCard from "../PostCard/PostCard";

import "./App.css";

import { getPosts, getAuthors } from "../api";

const App = () => {
  const [posts, setPosts] = useState("");
  const [authors, setAuthors] = useState("");

  useEffect(() => {
    (async () => {
      const promiseAll = await Promise.all([getPosts(), getAuthors()]);
      const [responPost, responAuthors] = promiseAll;
      console.log(responPost.status);

      if (responPost.status === 200 && responAuthors.status === 200) {
        setPosts(responPost.data);
        setAuthors(responAuthors.data);
      } else {
        alert("Cannot connect to server");
      }
    })(); //IIFE
  }, []);

  return (
    <div className="warpper">
      <header className="content-header">
        <h1>MAQE Forum</h1>
      </header>
      <div className="content-title">
        <p>Your current timezone is : Asia/Bangkok</p>
      </div>
      <section className="card-container">
     
          {Array.isArray(posts) &&
            posts.map((post) => {
              return (
                <PostCard
                  key={post.id.toString()}
                  authorPost={
                    Array.isArray(authors) &&
                    authors.filter((anuthor) => anuthor.id === post.author_id)
                  }
                  postTitle={post.title}
                  postBody={post.body}
                  postImg={post.image_url}
                  imgAlt={`image post ${post.id}`}
                  postCreated={post.created_at}
                />
              );
            })}
       
      </section>
    </div>
  );
};

export default App;
