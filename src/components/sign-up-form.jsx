import { useFormik } from "formik";
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

  const validationSchema = Yup.object({
    fname: Yup.string().required(),
    lname: Yup.string().required(),
    email: Yup.string().email().required(),
    password: Yup.string().min(8).required(),
    terms: Yup.boolean().oneOf([true]).required(),
  });

  const onSubmit = (values) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      console.log(values);
    }, 2000);
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
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
      <button disabled={!formik.dirty || !formik.isValid} type="submit">
        {isloading ? <Loader /> : "Submit"}
      </button>
    </form>
  );
};

export default SignUpForm;
