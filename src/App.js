import React, { Component } from 'react';
import Contact from './components/contact'
import Model from './model/contact'

class App extends Component {

  render() {
    return (
      <div>
        {Model.results.map((item) => <Contact key={item.login.uuid} person={item}/>)}
      </div>
    );
  }
}

export default App;
