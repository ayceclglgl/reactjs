import * as React from "react";
import AuthService from "../services/AuhService";
import { Button } from "react-bootstrap";

const AppContent = () => {
  const authService = new AuthService();

  return (
    <div>
      <div className="row">
        <div className="col-md-12 text-center" style={{ marginTop: "30px" }}>
          <Button
            className="btn btn-primary btn-login"
            style={{ margin: "10px" }}
            onClick={() => {
              authService.login();
            }}
          >
            Login
          </Button>
          <Button
            className="btn btn-secondary btn-getuser"
            style={{ margin: "10px" }}
          >
            Get User info
          </Button>
          <Button
            className="btn btn-warning btn-getapi"
            style={{ margin: "10px" }}
          >
            Call API
          </Button>
          <Button
            className="btn btn-success btn-renewtoken"
            style={{ margin: "10px" }}
          >
            Renew Token
          </Button>
          <Button
            className="btn btn-dark btn-logout"
            style={{ margin: "10px" }}
          >
            Logout
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AppContent;
