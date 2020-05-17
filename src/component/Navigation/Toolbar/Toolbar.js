import React from 'react';
import classes from './Toolbar.module.css';
import NavigationItems from '../NavigationItems/NavigationItems';

const toolbar = (props) =>(
<header className={classes.toolbar}>
    <div className={classes.hamburger} onClick={props.showDrawerHandler}>
        <div></div>
        <div></div>
        <div></div>
    </div>
    <div>Ticketing</div>
    <nav className={classes.desktopNavItems}><NavigationItems/></nav> 
</header>
)

export default toolbar;