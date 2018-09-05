import * as React from "react";
import { Route, Switch } from "react-router";

import HomePage from "./home-page/home-page";
import LoginPage from "./login-page/login-page";

export default () => (
    <Switch>
        <Route exact={true} path='/' component={HomePage} />
        <Route path='/login' component={LoginPage} />
    </Switch>
)