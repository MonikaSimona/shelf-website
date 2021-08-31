import { Icon } from "@iconify/react";
import React from "react";
import { NavLink } from "react-router-dom";

interface Props {
  imageSrc?: string;
  title: string;
  subtitle: string;
  review: string;
  reviewer: string;
  date: string;
}

const CollectionItemCard = (props: Props) => {
  const { imageSrc, title, subtitle, review, reviewer, date } = props;
  return (
    <div className="cardWrapper">
      <div className="img">
        <img src={imageSrc} alt="" />
      </div>
      <div className="cardBody">
        <div className="cardBodyHeader">
          <div className="title">{title}</div>
          <div className="subtitle">{subtitle}</div>
        </div>
        <div className="cardBodyReview">{review}</div>
        <div className="cardBodyFooter">
          <div className="reviewer">
            Review by <span>@{reviewer}</span>
          </div>
          <div className="date">
            {" "}
            <Icon icon="clarity:date-solid" />
            {date}
          </div>
        </div>
      </div>
      <div className="cardDisscusionButton">
        <NavLink className="disscusion" to="/disscusion">
          {" "}
          <Icon
            className="disscusionIcon"
            icon="akar-icons:arrow-forward-thick-fill"
          />{" "}
          <span className="text">Go to disscusion</span>{" "}
        </NavLink>
      </div>
    </div>
  );
};

export default CollectionItemCard;
