import React, { Component } from 'react';
import Contact from './components/contact'
import Filters from './components/filters'
import model from './model/contact'

class App extends Component {
  state = {
    allContacts: [],
    search: '',
    sort: 'asc'
  }

  componentDidMount() {
    this.setState({
      allContacts: model.results,
    })
  }

  toggleFavourite = (id) => {
    const favouriteList = this.state.allContacts
      .map(item => {
        if(item.login.uuid === id){
          return {
            ...item,
            favourite: !item.favourite
          }
        }
        return item
      })
    
    this.setState({
      allContacts: favouriteList
    })
  }

  updateInputValue = (event) => {
    this.setState({
      search: event.target.value
    })
  }

  setSort = sort => {
    this.setState({
      sort
    })
  }

  sortContacts = (a, b) => {
    return this.state.sort === 'asc' ? a.name.first.localeCompare(b.name.first) : b.name.first.localeCompare(a.name.first);
  }

  allContacts = arr => arr
    .filter(item => item.name.first.toLowerCase().includes(this.state.search.toLowerCase()))
    .sort((a, b) => this.sortContacts(a,b))
    .map((item) => 
      <Contact 
        key={item.login.uuid}
        person={item}
        click={() => this.toggleFavourite(item.login.uuid)}
      />
    )

  favouriteContacts = arr => arr
    .filter(item => item.favourite)
    .map((item) => 
      <Contact 
        key={item.login.uuid}
        person={item}
        click={() => this.toggleFavourite(item.login.uuid)}
        />
      )
  
  render() {
    return (
      <div>
        <Filters 
          search={this.state.search} 
          setSearch={this.updateInputValue}
          sort={this.state.sort}
          setSort={this.setSort}
        />

        {this.allContacts(this.state.allContacts)}

        FAVOURITE:
        {this.favouriteContacts(this.state.allContacts)}

      </div>
    );
  }
}

export default App;
