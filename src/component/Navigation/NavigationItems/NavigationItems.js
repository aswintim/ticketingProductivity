import React from 'react';
import NavigationItem from '../NavigationItem/NavigationItem';
import classes from './NavigationItems.module.css';

const navigationItems = (props)=>(
<ul className={classes.navItems}>
    <NavigationItem link="/">Sign up</NavigationItem>
    <NavigationItem link="/">Sign in</NavigationItem>

</ul>
)

export default navigationItems;