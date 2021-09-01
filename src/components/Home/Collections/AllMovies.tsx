import React from "react";
import Footer from "../../Footer/Footer";
import Search from "../../Search/Search";

interface Props {}

const AllMovies = (props: Props) => {
  return (
    <>
      <div className="collectionWrapper"></div>
      <Search />
      <Footer dark={true} />{" "}
    </>
  );
};

export default AllMovies;
