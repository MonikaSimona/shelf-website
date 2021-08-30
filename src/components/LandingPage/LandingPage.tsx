import { Icon } from "@iconify/react";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

interface Props {}

const LandingPage = (props: Props) => {
  const [showIntro, setShowIntro] = useState(false);
  useEffect(() => {
    const delay = setTimeout(() => {
      setShowIntro(true);
      console.log(true);
    }, 500);
    return () => {
      clearTimeout(delay);
    };
  }, []);
  return (
    <div className="container">
      <div
        className={`introWrapper ${
          showIntro ? "introWrapperOn" : "introWrapperOff"
        }`}
      >
        <div className="introSection">
          <h1>Shelf.</h1>
          <p className="subtitleOne">
            Have something to say about your favorite book, movie, or TV show?
          </p>
          <p className="subtitleTwo">
            You can put it on your Shelf. and others can see it too.{" "}
            <Icon className="smileIcon" icon="la:smile-beam" color="#ffffff" />{" "}
          </p>
        </div>
        <NavLink to="/auth">
          <Icon
            className="arrowIcon"
            icon="bi:arrow-down"
            color="white"
            width="66px"
            height="69px"
          />
        </NavLink>
      </div>
    </div>
  );
};

export default LandingPage;
