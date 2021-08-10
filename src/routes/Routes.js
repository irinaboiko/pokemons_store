import React from "react";
import { Route, Switch } from "react-router-dom";

import { ROUTES } from "./routesNames";

import PrivateRoute from "./PrivateRoute";
import LoginPageContainer from "../pages/LogInPage/containers/LoginPageContainer";
import SingUpPageContainer from "../pages/SingUpPage/containers/SingUpPageContainer";
import ProductsPageContainer from "../pages/ProductsPage/containers/ProductsPageContainer";
import ProductDetailsPageContainer from "../pages/ProductDetailsPage/containers/ProductDetailsPageContainer";
import AccountPageContainer from "../pages/AccountPage/containers/AccountPageContainer";

const Routes = () => {
  return (
    <Switch>
      <Route exact path={ROUTES.LOG_IN_PAGE} component={LoginPageContainer} />
      <Route exact path={ROUTES.SING_UP_PAGE} component={SingUpPageContainer} />
      <PrivateRoute
        exact
        path={ROUTES.PRODUCTS}
        component={ProductsPageContainer}
      />
      <PrivateRoute
        exact
        path={ROUTES.PRODUCT_DETAILS}
        component={ProductDetailsPageContainer}
      />
      <PrivateRoute
        exact
        path={ROUTES.CART}
        component={() => <div>CART</div>}
      />
      <PrivateRoute
        exact
        path={ROUTES.ACCOUNT}
        component={AccountPageContainer}
      />
    </Switch>
  );
};

export default Routes;
