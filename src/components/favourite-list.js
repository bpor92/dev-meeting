import React from 'react'
import Contact from './contact'

function FavouriteList (props) {
    const favouriteList = props.items
        .filter(item => item.favourite)
        .map((item) => 
            <Contact 
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