import React, { Component } from 'react';
import { connect } from 'react-redux';

class CatDetail extends Component {
    
    render() {
        if(!this.props.activeCat) {
            return (
                <h4>Please Select a Cat</h4>
            )
        }
        const cat = this.props.activeCat
        return (
            <h4>{ cat.name }</h4>
        )
    }
    
}

function mapStateToProps(state){
    return {
        activeCat: state.activeCat
    }
}

export default connect(mapStateToProps)(CatDetail);