import React from "react";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";

const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string().required("password is required"),
});

export const FormikComp = () => {
  const credencial = {
    email: "",
    password: "",
  };
  return (
    <div className="container d-flex justify-content-center flex-column pt-5">
      <h1 className="text-center">Formulario Login</h1>
      <Formik
        initialValues={credencial}
        //yup validation schema
        validationSchema={loginSchema}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 1000));
          alert(JSON.stringify(values, null, 2));
          localStorage.setItem("credential", values);
        }}
      >
        {(props) => {
          const { touched, errors, isSubmitting } = props;
          return (
            <Form className="d-flex flex-column gap-2">
              <label htmlFor="email">email</label>
              <Field
                id="email"
                name="email"
                type="email"
                placeholder="example@gmail.com"
              />
              {errors.email && touched.email && (
                <div className="error">
                  <p>{errors.email}</p>
                </div>
              )}

              <label htmlFor="password">password</label>
              <Field
                id="password"
                name="password"
                type="password"
                placeholder="password"
              />
              {errors.password && touched.password && (
                <div className="error">
                  <p>{errors.password}</p>
                </div>
              )}
              <button type="submit">Submit</button>
              {isSubmitting ? <p>login your credential...</p> : null}
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};
