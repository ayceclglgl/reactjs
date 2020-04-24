import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardHeader,
  MDBCardBody,
  MDBBtn
} from "mdbreact";
import AuthService from './services/AuhService';

import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

const FormPage = () => {
    const authService = new AuthService();
    const welcomeMsg = "Welcome to Identity Hack Day";
    const funMsg = "Hope you are having fun!";
    const buttonText = { text: 'LOGIN' };

  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md="6">
          <MDBCard>
            <MDBCardHeader color="deep-orange lighten-1"></MDBCardHeader>
            <MDBCardBody>
            <div>
              <label htmlFor="defaultWelcome" className="grey-text font-weight-light">
                {welcomeMsg} 
              </label>
            </div>
            <div>
              <label htmlFor="defaultFun" className="grey-text font-weight-light">
                {funMsg} 
              </label>
            </div>
            <div className="text-center mt-4">
                <MDBBtn color="deep-orange lighten-1" className="mb-3" type="submit" onClick= { () => {authService.login();}}>
                {buttonText.text}
                </MDBBtn>
            </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default FormPage;