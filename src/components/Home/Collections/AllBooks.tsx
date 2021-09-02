import React from "react";
import { useSelector } from "react-redux";
import Footer from "../../Footer/Footer";
import Search from "../../Search/Search";
import CollectionItemCard, { CardData } from "../CollectionItemCard";

interface Props {}

const AllBooks = (props: Props) => {
  const data = useSelector((state: any) => state.books);
  return (
    <>
      <div className="collectionWrapper">
        {data.length > 0 &&
          data.map((review: CardData, index: number) => (
            <CollectionItemCard
              key={index}
              type={review.type}
              imageSrc={review.imageSrc}
              title={review.title}
              subtitle={review.subtitle}
              review={review.review}
              reviewer={review.reviewer}
              date={review.date}
            />
          ))}
      </div>
      <Search />

      <Footer dark={true} />
    </>
  );
};

export default AllBooks;
