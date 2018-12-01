import React from 'react'

function Filters(props) {

    return (
        <div>
            <input value={props.search} onChange={props.setSearch}/>
            <span onClick={() => props.setSort('asc')}>asc</span>
            <span onClick={() => props.setSort('desc')}>desc</span>
        </div>
    )

}

export default Filters;