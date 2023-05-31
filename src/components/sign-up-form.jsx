import { ErrorMessage, Field, Form, Formik } from "formik";
import { useState } from "react";
import Loader from "./loader";
import * as Yup from "yup";

const SignUpForm = () => {
  const [isloading, setIsLoading] = useState(false);

  const initialValues = {
    fname: "",
    lname: "",
    email: "",
    password: "",
    terms: false,
  };

  const onSubmit = (values) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      console.log(values);
    }, 2000);
  };

  const validationSchema = Yup.object({
    fname: Yup.string().required(),
    lname: Yup.string().required(),
    email: Yup.string().email().required(),
    password: Yup.string().min(8).required(),
    terms: Yup.boolean(true).required().oneOf([true]),
  });

  return (
    <Formik {...{ initialValues, onSubmit, validationSchema }}>
      {({ isValid, dirty }) => (
        <Form>
          <div className="name-fields">
            <div className="fields">
              <label htmlFor="fname">First Name</label>
              <Field
                type="text"
                id="fname"
                placeholder="First name"
                name="fname"
              />
              <ErrorMessage className="error" component="p" name="fname" />
            </div>
            <div className="fields">
              <label htmlFor="lname">Last Name</label>
              <Field
                type="text"
                id="lname"
                placeholder="Last name"
                name="lname"
              />
              <ErrorMessage className="error" component="p" name="lname" />
            </div>
          </div>
          <div className="fields">
            <label htmlFor="email">Email</label>
            <Field
              type="text"
              id="email"
              placeholder="Email address"
              name="email"
            />
            <ErrorMessage className="error" component="p" name="email" />
          </div>
          <div className="fields">
            <label htmlFor="password">Password</label>
            <Field
              type="password"
              id="password"
              placeholder="Password"
              name="password"
            />
            <ErrorMessage className="error" component="p" name="password" />
          </div>
          <div className="fields terms">
            <Field type="checkbox" name="terms" id="terms" />
            <label htmlFor="terms">Terms and Condations</label>
          </div>
          <button disabled={!(isValid && dirty)} type="submit">
            {isloading ? <Loader /> : "Submit"}
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default SignUpForm;
