import React, {Component} from 'react'
import ContactsList from '../../components/contacts/contacts-list'
import FavouriteList from '../../components/contacts/favourites/favourite-list'
import Filters from '../../components/filters/filters'
import model from '../../model/contact'

class Contacts extends Component {
    state = {
        allContacts:  model.results,
        search: '',
        sort: 'asc'
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

    render() {
        return (
            <div>
                <Filters 
                    search={this.state.search} 
                    setSearch={this.updateInputValue}
                    sort={this.state.sort}
                    setSort={this.setSort}
                />

                <ContactsList 
                    items={this.state.allContacts}
                    search={this.state.search}
                    sort={this.state.sort}
                    toggleFavourite={this.toggleFavourite}
                    sortContacts={this.sortContacts}
                />

                <FavouriteList
                    items={this.state.allContacts}
                    toggleFavourite={this.toggleFavourite}
                />
            </div>
        )
    }
    
}

export default Contacts