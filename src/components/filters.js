import React from 'react'
import '../css/filters.css'

function Filters(props) {

    return (
        <div className="filters">
            <input value={props.search} onChange={props.setSearch}/>
            <span className={ props.sort === 'asc' ? 'active' : null } onClick={() => props.setSort('asc')}>asc</span>
            <span className={ props.sort === 'desc' ? 'active' : null } onClick={() => props.setSort('desc')}>desc</span>
        </div>
    )

}

export default Filters;