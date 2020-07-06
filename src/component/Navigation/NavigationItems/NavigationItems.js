import React from 'react';
import NavigationItem from '../NavigationItem/NavigationItem';
import classes from './NavigationItems.module.css';
import {NavLink} from 'react-router-dom';

const navigationItems = (props)=>(
<ul className={classes.navItems}>
    <NavigationItem link="/authenticate">Authentication</NavigationItem>
</ul>
)

export default navigationItems;