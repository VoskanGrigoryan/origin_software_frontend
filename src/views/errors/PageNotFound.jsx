import React from "react";
import { Button, Result } from "antd";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <Result
      status="error"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={
        <Link to="/login">
          <Button type="primary">Back Home</Button>
        </Link>
      }
    />
  );
};

export default PageNotFound;
