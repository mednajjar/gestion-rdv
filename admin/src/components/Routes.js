import React from 'react';
import {Route, Switch } from 'react-router-dom';
import Login from './login/Login';
import Dashboard from './dashboard/Dashboard';

import CustomerDash from './dashboard/customer/CustomerDash'

const Routes = () => {
    return (
        <Switch>
            <Route path='/' exact component={Login} />
            <Route path='/dashboard' component={Dashboard} />          
        </Switch>
    )
}

export default Routes
