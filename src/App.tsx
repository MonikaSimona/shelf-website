import React, { useState } from "react";
import "../src/styles/main.scss";
import LandingPage from "./components/LandingPage/LandingPage";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
  withRouter,
} from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { useEffect } from "react";
import "./styles/pageTransitions/slideTransitions.scss";
import Auth from "./components/Authenticate/Authenticate";
import Navbar from "./components/Navbar/Navbar";
import Collection from "./components/Home/Collections/Collection";

function App() {
  const timeout = { enter: 800, exit: 400 };
  const location = useLocation();
  const currentKey = location.pathname.split("/")[1] || "/";

  const getPathDepth = (location: any) => {
    let pathArr = location.pathname.split("/");
    pathArr = pathArr.filter((n: string) => n !== "");
    return pathArr.length;
  };

  const [prevDepth, setPrevDepth] = useState(getPathDepth(location));
  console.log("path depth", getPathDepth(location));

  useEffect(() => {
    setPrevDepth(getPathDepth(location));
    console.log(currentKey);
  }, [location]);

  return (
    <TransitionGroup component="div">
      <CSSTransition
        key={currentKey}
        timeout={timeout}
        classNames="pageSlider"
        mountOnEnter={false}
        unmountOnExit={true}
      >
        <div
          className={`${
            getPathDepth(location) - prevDepth >= 0 ? "up" : "down"
          } ${
            currentKey === "/" || currentKey === "auth"
              ? "landingPageBackground"
              : ""
          }`}
        >
          {currentKey === "collection" && <Navbar />}

          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/auth" component={Auth} />
            <Route exact path="/collection/:type" component={Collection} />
            {/* <Route path="/home/books" component={AllBooks} />
            <Route path="/home/movies" component={AllMovies} />
            <Route path="/home/tvshows" component={AllTvshows} /> */}
          </Switch>
        </div>
      </CSSTransition>
    </TransitionGroup>
  );
}

export default withRouter(App);
