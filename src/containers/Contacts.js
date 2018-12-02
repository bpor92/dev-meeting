import React from 'react'
import { Switch, Route } from 'react-router-dom'
import ContactsContainer from './contacts/Contacts'
import ContactContainer from './contacts/Contacts-item'

// The Roster component matches one of two different routes
// depending on the full pathname
const Roster = () => (
  <Switch>
    <Route exact path='/contacts' component={ContactsContainer}/>
    <Route path='/contacts/:id' component={ContactContainer}/>
  </Switch>
)


export default Roster
