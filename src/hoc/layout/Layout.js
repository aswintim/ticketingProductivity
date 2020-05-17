import React, {Component} from 'react';
import Aux from '../Auxiliary/Auxiliary';
import Toolbar from '../../component/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../component/Navigation/SideDrawer/SideDrawer';

class Layout extends Component{
    state={
        sideDrawer: false
    }

 showDrawerHandler=()=>{
     this.setState((prevState)=>{
         return {sideDrawer: true}
     })
 }

 removeDrawerHandler=()=>{
    this.setState((prevState)=>{
        return {sideDrawer:false}
    })
}

    render(){
        return(
            <Aux>
                <Toolbar showDrawerHandler={this.showDrawerHandler}/>
                <SideDrawer showDrawerHandler={this.state.sideDrawer} removeDrawerHandler={this.removeDrawerHandler}/>
            </Aux>
        )
    }
}

export default Layout;