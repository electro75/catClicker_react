import React from 'react';
import './cat-list.css'

export default (props) => {

    const catNames = props.cats.map(cat =>{
        return <li className="list-group-item" > { cat.name } </li>
    })

    return (
        <div>
            <h3>Click on a Cat</h3>
            <ul className="list-group" >
                { catNames }
            </ul>
        </div>
    )
}