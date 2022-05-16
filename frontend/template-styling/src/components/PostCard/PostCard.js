import React from "react";
import "./PostCard.css";

const PostCard = ({postTitle, postBody, postImg, imgAlt }) => {
  return (
    <>
      <div className="post-card">
        <div className="user-info">
          <img src="https://randomuser.me/api/portraits/men/1.jpg" />
          <strong>Jason Bourne</strong>
          <time>post on Saturday, May 9, 2020, 00:01</time>
        </div>
        <hr />
        <div className="content">
          <div className="content-text">
            <h4>{ postTitle}</h4>
            <p>
             {postBody}
            </p>
          </div>

          <img src={postImg} alt={imgAlt} />
        </div>
      </div>
    </>
  );
};
export default PostCard;
