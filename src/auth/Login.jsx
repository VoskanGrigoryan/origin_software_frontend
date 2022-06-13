import React from "react";
import "../assets/styles/LoginPage.css";
import { Row, Input, Typography, Divider, Button } from "antd";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../redux/authSlice";

const { Title } = Typography;

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //Basic validation for inputs, min lenght and valid email
  const validate = (values) => {
    const errors = {};

    if (!values.email) {
      errors.email = "Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }

    if (!values.password) {
      errors.password = "Required";
    } else if (values.password.length < 3) {
      errors.password = "Must be 4 characters or more";
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate,
    onSubmit: (values) => {
      dispatch(login(values));
      navigate("/actions");
    },
  });

  return (
    <div className="container">
      <form onSubmit={formik.handleSubmit} className="form">
        <Row>
          <Title level={2}>Login form</Title>
          <Divider style={{ marginTop: "0px", padding: 0 }} />
        </Row>

        <Input
          id="email"
          name="email"
          type="email"
          placeholder="Email"
          className="formInput"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? (
          <small className="inputErrorText">{formik.errors.email}</small>
        ) : null}

        <div style={{ marginBottom: "15px" }}></div>
        <Input.Password
          id="password"
          name="password"
          placeholder="Password"
          className="formInput"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        {formik.touched.password && formik.errors.password ? (
          <small className="inputErrorText">{formik.errors.password}</small>
        ) : null}
        <Row className="actionButtons">
          <Button className="resetButton">Reset</Button>

          <button className="loginButton" type="submit">
            Login
          </button>
        </Row>
      </form>
    </div>
  );
};

export default Login;
