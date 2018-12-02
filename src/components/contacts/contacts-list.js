import React from 'react'
import Contact from './contacts-item'

function ContactsList (props) {

    const contactsList = props.items
        .filter(item => item.name.first.toLowerCase().includes(props.search.toLowerCase()))
        .sort((a, b) => props.sortContacts(a,b))
        .map((item) => 
            <Contact 
                key={item.login.uuid}
                person={item}
                click={() => props.toggleFavourite(item.login.uuid)}
            />
        )

    return (
        <div>
            {contactsList}
        </div>
    )
}

export default ContactsList