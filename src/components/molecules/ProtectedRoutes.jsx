import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import IsLoading from "./IsLoading/IsLoading";

export default function ProtectedRoutes({ component: Component, ...rest }) {
  const { state } = useContext(AuthContext);
  return (
    <Route
      {...rest}
      render={(props) => {
        if (!state.isFetching) {
          if (state && state.isAuthenticated) {
            return <Component {...props} />;
          }
          return <Redirect to="/" />;
        }
        return <IsLoading />;
      }}
    />
  );
}
