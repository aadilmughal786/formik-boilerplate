import { useFormik } from "formik";
import { useState } from "react";
import Loader from "./loader";

const SignUpForm = () => {
  const [isloading, setIsLoading] = useState(false);
  const formik = useFormik({
    initialValues: {
      fname: "",
      lname: "",
      email: "",
      password: "",
      terms: false,
    },
    onSubmit: () => {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    },

    validate: (values) => {
      const errors = {};

      if (!values.fname) {
        errors.fname = "Required";
      }
      if (!values.lname) {
        errors.lname = "Required";
      }
      if (!values.email) {
        errors.email = "Required";
      }
      if (!values.password) {
        errors.password = "Required";
      }

      return errors;
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="name-fields">
        <div className="fields">
          <label htmlFor="fname">First Name</label>
          <input
            type="text"
            id="fname"
            placeholder="First name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.fname}
          />
          {formik.errors.fname && formik.touched.fname && (
            <p className="error">{formik.errors.fname}</p>
          )}
        </div>
        <div className="fields">
          <label htmlFor="lname">Last Name</label>
          <input
            type="text"
            id="lname"
            placeholder="Last name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.lname}
          />
          {formik.errors.lname && formik.touched.lname && (
            <p className="error">{formik.errors.lname}</p>
          )}
        </div>
      </div>
      <div className="fields">
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          placeholder="Email address"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.errors.email && formik.touched.email && (
          <p className="error">{formik.errors.email}</p>
        )}
      </div>
      <div className="fields">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          placeholder="Password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
        />
        {formik.errors.password && formik.touched.password && (
          <p className="error">{formik.errors.password}</p>
        )}
      </div>
      <div className="fields terms">
        <input
          type="checkbox"
          name="terms"
          id="terms"
          onChange={formik.handleChange}
          value={formik.values.terms}
        />
        <label htmlFor="terms">Terms and Condations</label>
      </div>
      <button type="submit">{isloading ? <Loader /> : "Submit"}</button>
    </form>
  );
};

export default SignUpForm;
