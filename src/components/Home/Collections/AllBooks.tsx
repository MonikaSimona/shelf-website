import React from "react";
import Footer from "../../Footer/Footer";
import CollectionItemCard from "../CollectionItemCard";

interface Props {}

const AllBooks = (props: Props) => {
  const review =
    " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta, minus animi quod optio exercitationem consectetur sed ipsum id harum sint!";
  return (
    <>
      <div className="collectionWrapper">
        <CollectionItemCard
          imageSrc="https://images-na.ssl-images-amazon.com/images/I/918TvCMQO4L.jpg"
          title="Test Title"
          subtitle="test subtitle"
          review={review}
          reviewer="testReviewer"
          date="01.01.2001"
        />
        <CollectionItemCard
          imageSrc="https://images-na.ssl-images-amazon.com/images/I/918TvCMQO4L.jpg"
          title="Test Title"
          subtitle="test subtitle"
          review={review}
          reviewer="testReviewer"
          date="01.01.2001"
        />
        <CollectionItemCard
          imageSrc="https://images-na.ssl-images-amazon.com/images/I/918TvCMQO4L.jpg"
          title="Test Title"
          subtitle="test subtitle"
          review={review}
          reviewer="testReviewer"
          date="01.01.2001"
        />
      </div>

      <Footer dark={true} />
    </>
  );
};

export default AllBooks;
