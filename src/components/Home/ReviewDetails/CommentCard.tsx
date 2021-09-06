import { Icon } from "@iconify/react";
import React, { useEffect } from "react";
import { useParams } from "react-router";
import { NavLink } from "react-router-dom";
import { Params } from "../Collections/Collection";

import { Comment } from "./CommentsOnReview";

interface Props {}

const CommentCard = (props: Comment) => {
  const { displayName, userName, userImage, date, comment } = props;
  const params: Params = useParams();

  return (
    <div className="commentWrapper">
      <div className="commentImg">
        <img src={userImage} alt="" />
      </div>
      <div className="commentBody">
        <div className="commentHeader">
          <h3 className="name">{displayName}</h3>
          <h4 className="userName">@{userName}</h4>
        </div>
        <div className="comment">{comment}</div>
        <div className="commentFooter">
          <span className={`date color${params.type}`}>
            <Icon icon="clarity:date-solid" /> {date}
          </span>
          <span className="reviewer">
            <Icon icon="fluent:preview-link-20-filled" color="black" /> see
            reviews by{" "}
            <NavLink
              to="/user/reviews"
              className={`reviewer color${params.type}`}
            >
              @{userName}
            </NavLink>
          </span>{" "}
        </div>
      </div>
    </div>
  );
};

export default CommentCard;
