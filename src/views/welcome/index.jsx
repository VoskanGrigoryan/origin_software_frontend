import React from "react";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const navigate = useNavigate();

  //Terribly hardcoded but its too late.
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        paddingBottom: "250px",
      }}
    >
      <div style={{ marginTop: "250px" }}>
        <h2>Code Challenge - Origin Software </h2>
        <Button
          type="primary"
          style={{ marginLeft: "140px" }}
          onClick={() => {
            navigate("/login");
          }}
        >
          Start
        </Button>
      </div>
    </div>
  );
};

export default Welcome;
