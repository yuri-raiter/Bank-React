import React from 'react'

import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Main from './pages/main'
import User from './pages/user'

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Main}></Route>
            <Route path="/users/:name" component={User}></Route>
        </Switch>
    </BrowserRouter>
)

export default Routes