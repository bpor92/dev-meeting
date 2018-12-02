import React from 'react'
import Api from '../../model/contact'
import ContactsItem from '../../components/contacts/contacts-item'

const Contact = (props) => {
    const contact = Api.get(props.match.params.id)
    return (
        <div>
            <ContactsItem 
                person={contact}
            />
        </div>
    )
}

export default Contact
