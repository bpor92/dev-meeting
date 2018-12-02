import React from 'react'
import ContactItem from '../contacts-item'

function FavouriteList (props) {
    const favouriteList = props.items
        .filter(item => item.favourite)
        .map((item) => 
            <ContactItem 
                key={item.login.uuid}
                person={item}
                click={() => props.toggleFavourite(item.login.uuid)}
            />
        )

    return(
        <div className="favourite">
            {favouriteList}
        </div>
    )
}

export default FavouriteList