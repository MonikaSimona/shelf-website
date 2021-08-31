import React from "react";
import Navbar from "../Navbar/Navbar";
import { BrowserRouter, Switch, Route, useLocation } from "react-router-dom";
import AllBooks from "./Collections/AllBooks";
import AllMovies from "./Collections/AllMovies";
import AllTvshows from "./Collections/AllTvshows";
import { useEffect } from "react";
interface Props {}

const Home = (props: Props) => {
  return <div className="homeWrapper"></div>;
};

export default Home;
