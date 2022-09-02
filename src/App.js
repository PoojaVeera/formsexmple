import "./App.css";
import React from "react";
import { useFormik } from "formik";

function App() {
  const form = useFormik({
    initialValues: { email: "", password: "" },
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      alert("you are successfully logged in");
      resetForm();
    },
    validate: (values) => {
      let errors = {};
      if (!values.email) {
        errors.email = "email required";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
      ) {
        errors.email = "Invalid email address";
      }
      if (!values.password) {
        errors.password = "password required";
      } else if (values.password.length < 5) {
        errors.password = "min of 5 characters";
      } else if (values.password.length > 12) {
        errors.password = "max of 12 characters";
      }
      return errors;
    },
  });
  // console.log(form);
  return (
    <div>
      <form onSubmit={form.handleSubmit} className="form">
        <h1>LOGIN FORM</h1>
        <label htmlFor="email">EMAIL</label>
        <br></br>
        <input
          type="email"
          name="email"
          onChange={form.handleChange}
          value={form.values.email}
        ></input>
        {form.errors.email ? (
          <div className="email">{form.errors.email}</div>
        ) : null}
        <br></br>
        <label htmlFor="password">PASSWORD</label>
        <br></br>
        <input
          type="password"
          name="password"
          onChange={form.handleChange}
          value={form.values.password}
        ></input>
        <br></br>
        {form.errors.password ? (
          <div className="password">{form.errors.password}</div>
        ) : null}
        <br></br>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
