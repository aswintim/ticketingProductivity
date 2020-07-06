import React, {Component} from 'react';
import NavigationItem from '../NavigationItem/NavigationItem';
import classes from './NavigationItems.module.css';
import {connect} from 'react-redux';

class navigationItems extends Component {
    render(){
        return(
            <ul className={classes.navItems}>
{this.props.isAuthenticated ? <NavigationItem link="/logout">Logout</NavigationItem> : <NavigationItem link="/authenticate">Authentication</NavigationItem>} 
    

</ul>
        )
    }

}

const mapStateToProps = state => {
    return{
        isAuthenticated: state.auth.userId !== null
    }
}


export default connect(mapStateToProps)(navigationItems);