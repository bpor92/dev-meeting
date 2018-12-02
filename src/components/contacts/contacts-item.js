import React from 'react'
import './contact.css'
import { Link } from 'react-router-dom'
import {withRouter} from 'react-router-dom';

const Contact = withRouter(props => {
    let {
        favourite,
        name: {first},
        phone,
        email,
        picture: {thumbnail},
        login: {uuid}
    } = props.person

    return (
        <div className="contact">
            {favourite ? <span className="rating"></span> : null}
            <img src={thumbnail} alt="cos"/>
            <span>{first}</span>
            <span>{phone}</span>
            <span>{email}</span>
            <span onClick={props.click}>{!favourite ? `Add to favourite` : `Delete from favourite`}</span>
            <Link to={{ pathname: `/contacts/${uuid}`}}>Edit</Link>
        </div>
    )
}
)

export default Contact;