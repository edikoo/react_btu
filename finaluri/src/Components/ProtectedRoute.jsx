import React from "react";
import { Redirect, Route } from "react-router-dom";

const ProtectedRoute = ({ component: Component, ...rest }) => (
  <Route {...rest}  render={ props => localStorage.getItem("autorizationToken")
      ? <Component {...props} /> : <Redirect to={{pathname: "/Login", state : { from : props.match.url}}} />
    }
  />
);

export default ProtectedRoute;