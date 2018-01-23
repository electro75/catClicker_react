import React, { Components } from 'react';
import './cat-list.css'

export default () => {
    return (
        <div>
            <h3>Catalyst</h3>
            <ul className="list-group" >
                <li className="list-group-item" >Cat 1</li>
                <li className="list-group-item" >Cat 2</li>
                <li className="list-group-item" >Cat 3</li>
            </ul>
        </div>
    )
}