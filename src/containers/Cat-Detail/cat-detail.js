import React, { Component } from 'react';
import { connect } from 'react-redux';

class CatDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            clicks: this.props.activeCat ? this.props.activeCat.clicks : 0 
        }
        this.handleClick = this.handleClick.bind(this);
    }
 
    handleClick(event) {
        console.log(this.props);
        this.props.activeCat.clicks ++;
        this.setState({
            clicks: this.props.activeCat.clicks
        })
        
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

export default connect(mapStateToProps)(CatDetail);