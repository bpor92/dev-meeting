import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from '../containers/Home'
import Contacts from '../containers/Contacts'

const Main = () => (
    <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/contacts" component={Contacts}></Route>
    </Switch>
)

export default Main