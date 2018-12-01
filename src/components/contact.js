import React from 'react'
import '../css/contact.css'

function Contact(props) {
    let {
        favourite,
        name: {first},
        phone,
        email,
        picture: {thumbnail}
    } = props.person


    return (
        <div className="contact" onClick={props.click}>
            {favourite ? <span className="rating"></span> : null}
            <img src={thumbnail} alt="cos"/>
            <span>{first}</span>
            <span>{phone}</span>
            <span>{email}</span>
        </div>
    )
}

export default Contact;