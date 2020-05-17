import React, {Component} from 'react';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.module.css';
import Backdrop from '../Backdrop/Backdrop';
import Aux from '../../../hoc/Auxiliary/Auxiliary';

const sideDrawer = (props)=>{
 const showSideDrawer = props.showDrawerHandler ? 
 <Aux>
 <div className={classes.sideDrawer}
//  style={{transform: props.showDrawerHandler ? 'translateX(0)' : 'translateX(-100vh)'}}
 />
 <Backdrop removeDrawerHandler={props.removeDrawerHandler}/>
 </Aux>
 : null;
 
 return(
 <div>
{showSideDrawer}
</div>

)
}

export default sideDrawer;

