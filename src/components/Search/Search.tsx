import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import * as yup from "yup";
import {
  filterBooks,
  getAllBooks,
} from "../../store/slices/booksSlice/booksSlice";
import { CardData } from "../Home/CollectionItemCard";

interface Props {
  data?: CardData[];
}
export interface SearchValues {
  searchTerm: string;
  option: string;
}
const searchInitialValues: SearchValues = {
  searchTerm: "",
  option: "",
};

const Search = ({ data }: Props) => {
  const location = useLocation();
  const currentKey = location.pathname.split("/")[2] || "/";
  const selectOptions = [
    "title",
    `${currentKey === "books" ? "author" : "studio"}`,
    "reviewer",
  ];

  const dispatch = useDispatch();

  useEffect(() => {
    console.log(data);
    console.log(selectOptions);
    dispatch(getAllBooks({}));
  }, [location]);

  const searchSchema = yup.object({
    searchTerm: yup.string().required("You must insert search term."),
    option: yup.string().oneOf(selectOptions),
  });

  return (
    <div className="search">
      <Formik
        initialValues={searchInitialValues}
        validationSchema={searchSchema}
        onSubmit={(values) => {
          const search = {
            searchTerm: values.searchTerm,
            option: values.option || "title",
          };
          console.log("search component", search);
          dispatch(filterBooks(search));
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
                currentKey === "books"
                  ? "submitBooks"
                  : currentKey === "movies"
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
