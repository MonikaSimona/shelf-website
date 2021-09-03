import {
  ErrorMessage,
  Field,
  Form,
  Formik,
  FormikFormProps,
  FormikProps,
} from "formik";
import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import * as yup from "yup";
import { setNoSuchTerm } from "../../store/slices/helperSlice/helperSlice";
import {
  filterItems,
  getAllItems,
} from "../../store/slices/reviewItemsSlice/reviewItemsSlice";

import { CardData } from "../Home/CollectionItemCard";
import { Params } from "../Home/Collections/Collection";

interface Props {
  data?: CardData[];
}
export interface SearchValues {
  searchTerm: string;
  option: string;
  type: string;
}
const searchInitialValues: SearchValues = {
  searchTerm: "",
  option: "",
  type: "",
};

const Search = () => {
  const params: Params = useParams();
  const type = params.type;
  const data = useSelector((state: any) => state.reviewItems);
  const [check, setCheck] = useState(false);
  const selectOptions = [
    "title",
    `${type === "books" ? "author" : "studio"}`,
    "reviewer",
  ];

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllItems({ type }));
  }, [params]);
  useEffect(() => {
    if (data.length === 0) {
      dispatch(setNoSuchTerm(true));
    } else {
      dispatch(setNoSuchTerm(false));
    }
  }, [check]);

  const searchSchema = yup.object({
    searchTerm: yup.string().required("You must insert search term."),
    option: yup.string().oneOf(selectOptions),
  });

  return (
    <div className="search">
      <Formik
        initialValues={searchInitialValues}
        validationSchema={searchSchema}
        onSubmit={(values, { resetForm }) => {
          const search = {
            searchTerm: values.searchTerm,
            option: values.option || "title",
            type,
          };
          console.log("search component", search);
          dispatch(filterItems(search));
          setCheck(!check);
          resetForm({ values: { searchTerm: "", option: "", type: "" } });
        }}
      >
        {({ values }) => (
          <Form className="searchForm">
            <div className="optionPicker">
              <p className="label">Search by</p>
              <Field as="select" name="option" className="picker">
                {selectOptions.map((value) => (
                  <option value={`${value}`}>{value}</option>
                ))}
              </Field>
            </div>
            <Field
              className="searchField"
              name="searchTerm"
              placeholder="insert search term"
              value={values.searchTerm}
            />
            <div className="errorWrapper">
              <ErrorMessage
                name="searchTerm"
                render={(err) => <p className="errorMessage">{err}</p>}
              />
            </div>
            <button
              type="submit"
              className={`submitButton ${
                type === "books"
                  ? "submitBooks"
                  : type === "movies"
                  ? "submitMovies"
                  : "submitTvshows"
              }`}
            >
              Go
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Search;
