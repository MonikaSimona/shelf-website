import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { findCommentsByReview } from "../../../store/slices/reviewItemsSlice/reviewItemsSlice";
import { Params } from "../Collections/Collection";
import CommentCard from "./CommentCard";

interface Props {
  comments: Comment[];
}
export interface Comment {
  displayName: string;
  userImage: string;
  userName: string;
  date: string;
  comment: string;
}

const CommentsOnReview = (props: Props) => {
  const commentsArray: Comment[] | undefined = props.comments;
  const params: Params = useParams();
  const dispatch = useDispatch();
  // const comments: Comment[] = useSelector((state: any) => state.reviewItems);
  useEffect(() => {
    // dispatch(findCommentsByReview({ type: params.id, id: params.id }));
  }, []);
  return (
    <>
      <h3>Discussion</h3>
      <div className="commentsWrapper">
        <div className="comments">
          {commentsArray &&
            commentsArray.map((comment) => (
              <CommentCard
                displayName={comment.displayName}
                userName={comment.userName}
                userImage={comment.userImage}
                comment={comment.comment}
                date={comment.date}
              />
            ))}
        </div>
        <div className="commentButton"></div>
      </div>
    </>
  );
};

export default CommentsOnReview;
