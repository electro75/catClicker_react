import React, { Component } from 'react';
import { connect } from 'react-redux';

import './cat-list.css'

class CatList extends Component {

    renderList() {
        return this.props.cats.map(cat=>{
            return (
                <li className="list-group-item"  > 
                    { cat.name } 
                    <span className="pull-right" >
                        <img src={ cat.src } className="img-responsive" alt="" />
                    </span>
                </li>
            ) 
        })
    }
    render() {
        return (
            <div>
                <h3>Click on a Cat</h3>
                <ul className="list-group" >
                    { this.renderList() }
                </ul>
            </div>
        )
    }
}

function mapStateToProps (state) {
    return {
        cats: state.cats
    }
}

export default connect (mapStateToProps)(CatList);