import * as React from "react";
import AuthService from "../services/AuhService";

const AppContent = () => {
  const authService = new AuthService();

  return (
    <div>
      <div className="row">
        <div className="col-md-12 text-center" style={{ marginTop: "30px" }}>
          <button
            className="btn btn-primary btn-login"
            style={{ margin: "10px" }}
            onClick={() => {
              authService.login();
            }}
          >
            Login
          </button>
          <button
            className="btn btn-secondary btn-getuser"
            style={{ margin: "10px" }}
          >
            Get User info
          </button>
          <button
            className="btn btn-warning btn-getapi"
            style={{ margin: "10px" }}
          >
            Call API
          </button>
          <button
            className="btn btn-success btn-renewtoken"
            style={{ margin: "10px" }}
          >
            Renew Token
          </button>
          <button
            className="btn btn-dark btn-logout"
            style={{ margin: "10px" }}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppContent;
