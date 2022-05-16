import React from "react";
import "./PostCard.css";

const PostCard = ({
  authorPost,
  postTitle,
  postBody,
  postImg,
  imgAlt,
  postCreated,
}) => {
  // Create tag anuthor post
  function anuthorInfo(anuthor) {
    return (
      Array.isArray(anuthor) &&
      anuthor.map((value) => {
        return (
          <>
            <img src={value.avatar_url} alt={`avatar ${value.id}`} />
            <strong>{value.name}</strong>
          </>
        );
      })
    );
  }

  // Create tag time posted on
  function postedOn(strinDate) {
    const options = { dateStyle: "full", timeStyle: "short", hourCycle: "h23" };
    const d = new Date(strinDate);

    const _postedOn = d.toLocaleString("default", options);
    return <time>post on {_postedOn}</time>;
  }

  return (
    <div className="post-card">
      <div className="user-info">
        {anuthorInfo(authorPost)}
        {postedOn(postCreated)}
      </div>
      <div className="content">
        <div className="content-text">
          <h4>{postTitle}</h4>
          <p>{postBody}</p>
        </div>
        <img src={postImg} alt={imgAlt} />
      </div>
    </div>
  );
};
export default PostCard;
