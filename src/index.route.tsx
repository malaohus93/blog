import * as React from "react";
import { Route, Switch } from "react-router";

import HomePage from "./pages//home-page/home-page";
import LoginPage from "./pages/login-page/login-page";

export default () => (
    <Switch>
        <Route exact={true} path='/' component={HomePage} />
        <Route path='/login' component={LoginPage} />
    </Switch>
)