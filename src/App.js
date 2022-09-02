import "./App.css";
import React from "react";
import { useFormik } from "formik";

function App() {
  const form = useFormik({
    initialValues: { email: "", password: "" },
    onSubmit: (values) => {
      console.log(values);
      alert(JSON.stringify(values, null, 2));
    },
    validate: (values) => {
      let errors = {};
      if (!values.email) {
        errors.email = "email required";
      }
      if (!values.password) {
        errors.password = "password required";
      }
      return errors;
    },
  });
  // console.log(f);
  return (
    <div>
      <center>
        <form onSubmit={form.handleSubmit}>
          <label htmlFor="email">EMAIL</label>
          <br></br>
          <input
            type="email"
            name="email"
            onChange={form.handleChange}
            value={form.values.email}
          ></input>
          {form.errors.email ? <div>{form.errors.email}</div> : null}
          <br></br>
          <label htmlFor="password">PASSWORD</label>
          <br></br>
          <input
            type="password"
            name="password"
            onChange={form.handleChange}
            value={form.values.password}
          ></input>
          {form.errors.password ? <div>{form.errors.password}</div> : null}
          <br></br>
          <button type="submit">Submit</button>
        </form>
      </center>
    </div>
  );
}

export default App;
