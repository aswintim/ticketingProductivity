import React from 'react';
import classes from './NavigationItem.module.css';

const navigationItem = (props) =>(
<li className={classes.navItem}>
<a href={props.link}>{props.children}</a>
</li>
)

export default navigationItem;