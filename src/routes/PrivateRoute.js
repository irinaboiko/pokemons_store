import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";

import { ROUTES } from "./routesNames";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { isAuth } = useSelector((state) => state.auth);

  return (
    <Route
      {...rest}
      render={(props) =>
        !isAuth ? (
          <Redirect to={ROUTES.LOG_IN_PAGE} />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

PrivateRoute.propTypes = {
  component: PropTypes.node.isRequired,
};

export default PrivateRoute;
