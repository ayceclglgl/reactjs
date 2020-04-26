// 1- Import the React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import AppContent from "./components/AppContent";

// 2- Create a react component
const App = () => {
  // equalt to const App = function => { ...
  //'{}' is using for JS codes like {labelText}
  // If you want to show another component you have to use GSX tags
  const welcomeMsg = "Welcome to Identity Hack Day";

  return (
    // return JSX (JSX will turn into JS with Babel(https://babeljs.io/))
    <div className="App">
      <Header
        pageTitle={welcomeMsg}
        logoSrc={process.env.PUBLIC_URL + "/favicon.ico"}
      />
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <AppContent />
          </div>
        </div>
      </div>
    </div>
  );
};

// 3- Take the react component and show it on the screen
// Get the App component that we create above, put it into GSX tags (like html tags)
// Take our component and render it or display it inside of this div with ID root
// We have 'index.html' file in puplic folder - <div id="root"></div>
ReactDOM.render(
  <App />,
  document.querySelector("#root") // querySelector is native for all browsers
);
