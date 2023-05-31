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
    social: {
      codepan: "",
      github: "",
    },
    phonenumbers: ["", ""],
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
    terms: Yup.boolean().required().oneOf([true]),
    social: Yup.object().shape({
      codepan: Yup.string().required(),
      github: Yup.string().required(),
    }),
    phonenumbers: Yup.array().of(
      Yup.string().matches(/^\d{10}$/, "Invalid phone number")
    ),
  });

  return (
    <Formik {...{ initialValues, onSubmit, validationSchema }}>
      {/* rander props pattren */}
      {({ isValid, dirty }) => (
        <Form>
          <div className="group-fields">
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

          <div className="group-fields">
            <div className="fields">
              <label htmlFor="codepan">CodePan</label>
              <Field
                type="text"
                id="codepan"
                placeholder="CodePan link"
                name="social.codepan"
              />
              <ErrorMessage
                className="error"
                component="p"
                name="social.codepan"
              />
            </div>
            <div className="fields">
              <label htmlFor="github">GitHub</label>
              <Field
                type="text"
                id="github"
                placeholder="GitHub link"
                name="social.github"
              />
              <ErrorMessage
                className="error"
                component="p"
                name="social.github"
              />
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

          <div className="group-fields">
            <div className="fields">
              <label htmlFor="phonenumber1">CodePan</label>
              <Field
                type="text"
                id="phonenumber1"
                placeholder="phonenumber1"
                name="phonenumbers[0]"
              />
              <ErrorMessage
                className="error"
                component="p"
                name="phonenumbers[0]"
              />
            </div>
            <div className="fields">
              <label htmlFor="phonenumber2">GitHub</label>
              <Field
                type="text"
                id="phonenumber2"
                placeholder="phonenumber2"
                name="phonenumbers[1]"
              />
              <ErrorMessage
                className="error"
                component="p"
                name="phonenumbers[1]"
              />
            </div>
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
