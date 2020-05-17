import React, {Component} from 'react';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.module.css';
import Backdrop from '../Backdrop/Backdrop';
import Aux from '../../../hoc/Auxiliary/Auxiliary';

const sideDrawer = (props)=>{ 
 return(
 <div>
     <div className={classes.sideDrawer}
     style={{'transform': props.showDrawerHandler ? 'translateX(0)' : 'translateX(-100vh)'}}>
         <NavigationItems/>
     </div>

     <div style={{'display': props.showDrawerHandler ? 'block' : 'none'}}><Backdrop removeDrawerHandler={props.removeDrawerHandler} /></div>

</div>

)
}

export default sideDrawer;

