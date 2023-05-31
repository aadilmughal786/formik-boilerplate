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
    terms: Yup.boolean().required(),
  });

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
            {...formik.getFieldProps("fname")}
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
            {...formik.getFieldProps("lname")}
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
          {...formik.getFieldProps("email")}
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
          {...formik.getFieldProps("password")}
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
          {...formik.getFieldProps("terms")}
        />
        <label htmlFor="terms">Terms and Condations</label>
      </div>
      <button type="submit">{isloading ? <Loader /> : "Submit"}</button>
    </form>
  );
};

export default SignUpForm;
