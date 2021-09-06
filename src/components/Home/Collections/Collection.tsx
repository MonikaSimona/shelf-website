import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import { HelperState } from "../../../store/slices/helperSlice/helperSlice";
import { getAllItems } from "../../../store/slices/reviewItemsSlice/reviewItemsSlice";
import Footer from "../../Footer/Footer";
import Search from "../../Search/Search";
import CollectionItemCard, { CardData } from "../CollectionItemCard";

export interface Params {
  id: string;
  type?: string;
}
const Collection = () => {
  const params: Params = useParams();
  const type = params.type;

  const dispatch = useDispatch();

  //   useEffect(() => {
  //     console.log("params", params.type);
  //   }, []);
  const data = useSelector((state: any) => state.reviewItems);
  const noSuchTerm = useSelector((state: HelperState) => state.noSuchTerm);
  useEffect(() => {
    console.log("PARAMS", params);
    if (!params.hasOwnProperty("id")) {
      dispatch(getAllItems({ type, id: "" }));
      console.log("COLLECTION");
    }
  }, [params]);
  return (
    <>
      {data.length === 0 ? (
        <div className="collectionWrapper noItems">
          {noSuchTerm ? (
            <div>Nothing found</div>
          ) : (
            <>
              There are no reviews in this category. Be the first to review
              yourfavorite{" "}
              <span className="category">
                {type && type.substring(0, type.length - 1)}
              </span>
            </>
          )}
        </div>
      ) : (
        <div className="collectionWrapper">
          {data.length > 0 &&
            data.map((review: CardData, index: number) => (
              <CollectionItemCard
                id={review.id}
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
      )}

      <Search />

      <Footer dark={true} />
    </>
  );
};

export default Collection;
