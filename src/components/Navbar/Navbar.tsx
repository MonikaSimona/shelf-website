import { Icon } from "@iconify/react";
import React, { useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";

interface Props {}

const Navbar = (props: Props) => {
  const location = useLocation();
  const currentKey = location.pathname.split("/")[2] || "/";
  useEffect(() => {
    console.log("currentKey", currentKey);
  }, [location]);
  return (
    <div className="navbarWrapper">
      <div className="sideBar">
        <ul className="navigationsTabs">
          <li className="logo">Shelf.</li>
          <li>
            <NavLink
              to="/home/books"
              className={`sidebarItem books ${
                currentKey === "books" && "activeBooks"
              } `}
            >
              <Icon className="icon" icon="el:book" />
              Books
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/home/movies"
              className={`sidebarItem movies ${
                currentKey === "movies" && "activeMovies"
              }`}
            >
              <Icon className="icon" icon="bx:bxs-camera-movie" />
              Movies
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/home/tvshows"
              className={`sidebarItem tvshows ${
                currentKey === "tvshows" && "activeTvshows"
              }`}
            >
              <Icon className="icon" icon="bx:bxs-slideshow" />
              TVShows
            </NavLink>
          </li>
        </ul>
        <ul className="navigationsButtons">
          <li>
            <NavLink to="/shelf" className="buttonsItem">
              <Icon className="iconButton" icon="mdi:bookshelf" width="32px" />
            </NavLink>
          </li>
          <li>
            <NavLink to="/profile" className="buttonsItem">
              <Icon
                className="iconButton"
                icon="bi:person-circle"
                width="32px"
              />
            </NavLink>
          </li>
          <li>
            <NavLink to="/logout" className="buttonsItem">
              <Icon
                className="iconButton"
                icon="ri:logout-circle-line"
                width="32px"
              />
            </NavLink>
          </li>
        </ul>
      </div>
      <div
        className={`nav ${
          currentKey === "books"
            ? "navColorBooks"
            : currentKey === "movies"
            ? "navColorMovies"
            : "navColorTvshows"
        }`}
      >
        <NavLink to="/messages" className="navItem">
          <Icon icon="bi:chat-left-dots-fill" />
          <span>Messages</span>
        </NavLink>
        {/* <div className="navItem">
          <Icon className="infoIcon" icon="flat-color-icons:about" />
          <span>About</span>
        </div> */}
      </div>
    </div>
  );
};

export default Navbar;
