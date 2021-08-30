import React from "react";
import { FormValues } from "../RegisterComponent/RegisterComponent";
import * as yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";

const initialValues: FormValues = {
  username: "",
  password: "",
};
const Login = () => {
  const userSchema = yup.object({
    username: yup.string().required("Username is required!"),
    password: yup
      .string()
      .required("Password is required!")
      .min(8, "Password must be at least 8 characters."),
  });
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={userSchema}
      onSubmit={(e) => {}}
    >
      {({ values }) => (
        <Form className="form">
          <label htmlFor="username" className="inputLabel">
            Username
          </label>
          <Field
            className="inputField"
            name="username"
            placeholder="insert username"
            value={values.username}
            id="username"
          />
          <div className="errorWrapper">
            <ErrorMessage
              name="username"
              render={(err) => <p className="errorMessage">{err}</p>}
            />
          </div>
          <label htmlFor="password" className="inputLabel">
            Password
          </label>
          <Field
            className="inputField"
            name="password"
            placeholder="insert password"
            value={values.password}
            id="password"
          />
          <div className="errorWrapper">
            <ErrorMessage
              name="password"
              render={(err) => <p className="errorMessage">{err}</p>}
            />
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default Login;
