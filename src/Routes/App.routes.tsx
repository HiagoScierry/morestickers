import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { Home, GetStick } from "../Pages/index";

const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/stick" component={GetStick} />
      </Switch>
    </BrowserRouter>
  );
};

export default AppRoutes;
