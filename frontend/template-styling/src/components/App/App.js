import React, { useState, useEffect } from "react";

import PostCard from "../PostCard/PostCard";

import "./App.css";

import { getPosts } from "../api";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    (async () => {
      const respons = await getPosts();
      console.log(respons.status);
      console.log(respons.statusText);
      console.log(respons.data);

      if (respons.status === 200) {
        const dataPosts = respons.data;
        setPosts(dataPosts);
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
      <div className="card-container">
        {Array.isArray(posts) &&
          posts.map((post) => {
            return (
              <PostCard
                key={post.id}
                postTitle={post.title}
                postBody={post.body}
                postImg={post.image_url}  
                imgAlt ={`image post ${post.id}`}        
              
              />
            );
          })}
      </div>
    </div>
  );
}

export default App;
