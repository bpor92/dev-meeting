import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import Home from './containers/Home'
import Contacts from './containers/Contacts'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <nav>
            <Link to="/home">Home</Link>
            <Link to="/contacts">Contacts</Link>
          </nav>

          <Route path="/home" component={Home}></Route>
          <Route path="/contacts" component={Contacts}></Route>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
