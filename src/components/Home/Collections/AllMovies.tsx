import React from "react";
import Footer from "../../Footer/Footer";

interface Props {}

const AllMovies = (props: Props) => {
  return (
    <>
      <div className="collectionWrapper"></div>
      <Footer dark={true} />{" "}
    </>
  );
};

export default AllMovies;
