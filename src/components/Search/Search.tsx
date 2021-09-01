import { Field, Form, Formik, yupToFormErrors } from "formik";
import React, { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import * as yup from "yup";
import { CardData } from "../Home/CollectionItemCard";

interface Props {
  data?: CardData[];
}
interface SearchValues {
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
    `${currentKey === "books" ? "author" : "studio"}`,
    "reviewer",
    "title",
  ];

  const [search, setSearch] = useState({ searchTerm: "", option: "" });

  useEffect(() => {
    console.log(data);
    console.log(selectOptions);
  }, [location]);

  const searchSchema = yup.object({
    searchTerm: yup.string(),
    option: yup.string().oneOf(selectOptions),
  });

  return (
    <div className="search">
      <Formik
        initialValues={searchInitialValues}
        validationSchema={searchSchema}
        onSubmit={(values) => {
          setSearch({
            searchTerm: values.searchTerm,
            option: values.option,
          });
          console.log(search);
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
              //   onChange={() => {
              //     setSearchTerm(values.searchTerm);
              //   }}
              className="searchField"
              name="searchTerm"
              placeholder="insert search term"
              value={values.searchTerm}
            />
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
