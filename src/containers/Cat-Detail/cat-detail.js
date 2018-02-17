import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { catClick } from '../../actions/index'

class CatDetail extends Component {

    //the commented code was my initial logic for updating the clicks property, but this was i end
    //up manipulating the component level state. This reverts back to original when activeCat is changed.
    constructor(props) {
        super(props);
        // this.state = {
        //     clicks: this.props.activeCat ? this.props.activeCat.clicks : 0 
        // }
        this.handleClick = this.handleClick.bind(this);
    }
 
    handleClick(event) {
        // console.log(this.props);
        // this.props.activeCat.clicks ++;
        // this.setState({
        //     clicks: this.props.activeCat.clicks
        // })
        this.props.catClick(this.props.activeCat);
    }
    
    render() {
        if(!this.props.activeCat) {
            return (
                <h4>Please Select a Cat</h4>
            )
        }
        const cat = this.props.activeCat
        return (
            <div>
                <h3>{ cat.name } No. of clicks: { cat.clicks }  </h3>
                <span>
                    <img src={ cat.src } className="img-responsive" onClick={ this.handleClick }  style={{maxHeight: '450px'}} />
                </span>
            </div>
            
            
        )
    }
    
}

function mapStateToProps(state){
    return {
        activeCat: state.activeCat
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({ catClick }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CatDetail);