import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../../store/index';
import {Redirect} from 'react-router-dom';

class Logout extends Component{
    componentDidMount(){
        this.props.onAuthLogout();
    }
    
    render(){
        return <Redirect to='/' />
    }
}

const mapDispatchToProps = dispatch => {
    return{
        onAuthLogout: ()=>dispatch(actions.authLogout())
    }
}

export default connect(null, mapDispatchToProps)(Logout);