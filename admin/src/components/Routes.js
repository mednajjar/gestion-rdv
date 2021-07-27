import React from 'react';
import {Route, Switch } from 'react-router-dom';
import Login from './login/Login';
import Dashboard from './dashboard/Dashboard';
import Register from './login/Register';
// import CustomerDash from './dashboard/customer/CustomerDash'

const Routes = () => {
    return (
        <Switch>
            <Route path='/' exact component={Login} />
            <Route path='/dashboard' component={Dashboard} /> 
            <Route path='/register' component={Register} /> 

        </Switch>
    )
}

export default Routes
