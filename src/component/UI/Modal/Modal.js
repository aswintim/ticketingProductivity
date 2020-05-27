import classes from './Modal.module.css';
import React, {Component} from 'react';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component{
render(){
    return(
<Aux>
    <div style={{display: this.props.modalShow ? 'block' : 'none'}}><Backdrop removeDrawerHandler={this.props.removeModalHandler}/></div>
    <div className={classes.Modal} 
    style={{transform: this.props.modalShow ? 'translateY(0)' : 'translateY(-100vh)', 
            opacity: this.props.modalShow ? '1' : '0'
    }}>
        {this.props.children}
    </div>
</Aux>
    )

}

}

export default Modal;