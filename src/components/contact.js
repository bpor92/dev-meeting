import React from 'react'

function Contact(props) {
    return (
        <div className="contact">
            <span>{props.person.name.first}</span>
            <span>{props.person.phone}</span>
            <span>{props.person.email}</span>
        </div>
    )
}

export default Contact;