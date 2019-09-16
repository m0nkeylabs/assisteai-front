import React from 'react'
import {Route, Redirect, Switch} from "react-router-dom"

import HomeComponent from '../modules/pages/home'
import PageNotFoundComponent from '../modules/pages/page-not-found';


export default props => (
    <Switch>
        <Route path='/' component={HomeComponent} exact />
        <Route path='/not-found' component={PageNotFoundComponent} />
        <Route path='*' render={() => <Redirect to="/not-found"/>} />
    </Switch>
)