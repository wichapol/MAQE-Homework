import React from "react";
import "./PostCard.css";

const PostCard = () => {
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
            <h4>Let's see this awesome post!</h4>
            <p>
              After day, don't sixth were divide creepeth living him it heaven
              moveth of male man rule, made gathered cattle after. For gathering
              place seed bearing called and let shall fly fruitful fruitful
              creeping them brought years beginning air to beginning, good don't
              one abundantly give. That were blessed made moving light saw place
              they're. Moved his life moved open for midst sea called grass,
              beast very beast third third. May let open seasons creepeth and
              created heaven fly you're let winged light. Fruit after. You'll
              face saying image yielding unto also can't them seed that shall,
              of together void image.
            </p>
          </div>

          <img src="https://picsum.photos/id/2/320/240" alt="" />
        </div>
      </div>
      <div className="post-card">
        <div className="user-info">
          <img src="https://randomuser.me/api/portraits/men/1.jpg" />
          <strong>Jason Bourne</strong>
          <time>post on Saturday, May 9, 2020, 00:01</time>
        </div>
        <hr />
        <div className="content">
          <div className="content-text">
            <h4>Let's see this awesome post!</h4>
            <p>
              After day, don't sixth were divide creepeth living him it heaven
              moveth of male man rule, made gathered cattle after. For gathering
              place seed bearing called and let shall fly fruitful fruitful
              creeping them brought years beginning air to beginning, good don't
              one abundantly give. That were blessed made moving light saw place
              they're. Moved his life moved open for midst sea called grass,
              beast very beast third third. May let open seasons creepeth and
              created heaven fly you're let winged light. Fruit after. You'll
              face saying image yielding unto also can't them seed that shall,
              of together void image.
            </p>
          </div>

          <img src="https://picsum.photos/id/2/320/240" />
        </div>
      </div>
    </>
  );
};
export default PostCard;
