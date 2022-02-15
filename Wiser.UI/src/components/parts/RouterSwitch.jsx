import { Switch, Route, useLocation } from "react-router-dom";
import Login from "../pages/Login";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { isUserAuthenticated } from "../../store/ducks/auth.duck";
import { LOGIN_TOKEN } from "../../utils/constants";
import PrivateRoute from "../pages/PrivateRoute";
import { useSelector } from "react-redux";
import { mainRoutes } from "../../utils/routes";
const RouterSwitch = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const isLoggedIn = useSelector((state) => state.entities.auth.isLoggedIn);
  useEffect(() => {
    if (LOGIN_TOKEN && location.pathname !== "/")
      dispatch(isUserAuthenticated());
  }, [dispatch, location]);

  const renderMainRoutes = () => {
    const routes = mainRoutes.map((route, index) => {
      return (
        <PrivateRoute
          key={index}
          path={route.to}
          IsCorrectRole={true}
          component={route.component}
          authenticated={isLoggedIn}
        />
      );
    });
    return routes;
  };
  return (
    <Switch>
      <Route exact path="/">
        <Login />
      </Route>
      {renderMainRoutes()}
    </Switch>
  );
};

export default RouterSwitch;
