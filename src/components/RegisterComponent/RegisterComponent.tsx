import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import * as yup from "yup";

export interface FormValues {
  firstName?: string;
  lastName?: string;
  email?: string;
  username: string;
  password: string;
}
const initialValues: FormValues = {
  firstName: "",
  lastName: "",
  email: "",
  username: "",
  password: "",
};

const Register = () => {
  const userSchema = yup.object({
    firstName: yup.string().required("First name is required!"),
    lastName: yup.string().required("Last name is required!"),
    email: yup.string().required("Email is required!"),
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
          <label htmlFor="firstName" className="inputLabel">
            First Name
          </label>
          <Field
            className="inputField"
            name="firstName"
            placeholder="insert first name"
            value={values.firstName}
            id="firstName"
          />
          <div className="errorWrapper">
            <ErrorMessage
              name="firstName"
              render={(err) => <p className="errorMessage">{err}</p>}
            />
          </div>
          <label htmlFor="lastName" className="inputLabel">
            Last Name
          </label>
          <Field
            className="inputField"
            name="lastName"
            placeholder="insert last name"
            value={values.lastName}
            id="lastName"
          />
          <div className="errorWrapper">
            <ErrorMessage
              name="lastName"
              render={(err) => <p className="errorMessage">{err}</p>}
            />
          </div>
          <label htmlFor="email" className="inputLabel">
            Email
          </label>
          <Field
            className="inputField"
            name="email"
            placeholder="insert email"
            value={values.email}
            id="email"
          />
          <div className="errorWrapper">
            <ErrorMessage
              name="email"
              render={(err) => <p className="errorMessage">{err}</p>}
            />
          </div>
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

export default Register;
