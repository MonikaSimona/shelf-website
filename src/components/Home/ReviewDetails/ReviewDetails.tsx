import { Icon } from "@iconify/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { findItemById } from "../../../store/slices/reviewItemsSlice/reviewItemsSlice";
import Footer from "../../Footer/Footer";
import { CardData } from "../CollectionItemCard";
import { Params } from "../Collections/Collection";
import CommentsOnReview, { Comment } from "./CommentsOnReview";

const ReviewDetails = () => {
  const params: Params = useParams();
  const dispatch = useDispatch();
  const item: CardData = useSelector((state: any) => state.reviewItems)[0];
  const comments: any = item.comments && item.comments;
  useEffect(() => {
    dispatch(findItemById({ type: params.type, id: params.id }));
    console.log("COMMENTS REVIEW", item.comments);
  }, [params.id]);
  return (
    <>
      <div className="wrapper">
        <div className="review">
          <img src={item.imageSrc} alt="" />
          <div className="reviewBody">
            <div className="reviewHeader">
              <h3 className="title">{item.title}</h3>
              <h4 className="subtitle">{item.subtitle}</h4>
            </div>
            <p>{item.review}</p>
            <div className="reviewFooter">
              <span>
                Review by{" "}
                <span className={`reviewer color${params.type}`}>
                  @{item.reviewer}
                </span>
              </span>{" "}
              <span className={`date color${params.type}`}>
                <Icon icon="clarity:date-solid" /> {item.date}
              </span>
            </div>
          </div>
        </div>
        <CommentsOnReview comments={comments} />
      </div>
      <Footer dark={true} />
    </>
  );
};

export default ReviewDetails;
