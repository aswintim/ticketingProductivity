import React from 'react';
import classes from './Toolbar.module.css';
import NavigationItems from '../NavigationItems/NavigationItems';
import {NavLink} from 'react-router-dom';

const toolbar = (props) =>(
<header className={classes.toolbar}>
    <div className={classes.hamburger} onClick={props.showDrawerHandler}>
        <div></div>
        <div></div>
        <div></div>
    </div>
    <NavLink to='/' style={{textDecoration: 'none', color: 'black'}}>Ticketing</NavLink>
    <nav className={classes.desktopNavItems}><NavigationItems/></nav> 
</header>
)

export default toolbar;