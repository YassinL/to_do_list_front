import React from "react";
import { Switch, Route } from "react-router-dom";
import Board from "./pages/Board/Board";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import List from "./pages/List/List";
import ProtectedRoutes from "./molecules/ProtectedRoutes";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/board" component={Board} />
      <ProtectedRoutes exact path="/board/:id" component={List} />
    </Switch>
  );
}
