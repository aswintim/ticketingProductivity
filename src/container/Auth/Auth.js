import React, {Component} from 'react';
import Input from '../../component/UI/Input//Input';
import classes from './Auth.module.css';
import Button from '../../component/UI/Button/Button';
import {connect} from 'react-redux';
import * as actions from '../../store/index';
import Spinner from '../../component/UI/Spinner/Spinner';
import {Redirect} from 'react-router-dom';

class Auth extends Component{
    state= {
        controls:{
            email:{
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Your Email'
                },
                value: '',
                validation: {
                    required: true,
                    isEmail: true,
                    minLength: 6
                },
                valid: false,
                touched: false
            },
            password: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'Your Password'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 6
                },
                valid: false,
                touched: false
            }
        },
        isSignUp: true
    }
    
    checkValidity(value, rules){
        let isValid= true;

        if(rules.required){
            isValid= value.trim() !== '' && isValid; //&& isValid mean the upper rules must be true to go through
        }

        if(rules.minLength){
            isValid = value.length >= rules.minLength && isValid;
        }

        if(rules.maxLength){
            isValid = value.length <= rules.maxLength && isValid;
        }

        return isValid;
    }

    changeHandler = (event, controlName) => {
        const updatedControls = {
            ...this.state.controls,
            [controlName]: {
                ...this.state.controls[controlName],
                value:event.target.value,
                valid:this.checkValidity(event.target.value, this.state.controls[controlName].validation),
                touched:true
            }
        }
        this.setState({controls:updatedControls})
    }

    switchAuthModeHandler = () => {
        this.setState((prevState)=>{
            return{
                isSignUp: !prevState.isSignUp
            }
        })
    }

    submitHandler = (event) =>{
        event.preventDefault();
        this.props.onAuth(this.state.controls.email.value, this.state.controls.password.value, this.state.isSignUp)
    }


    render(){
        const authForm = [];

        for(let key in this.state.controls){
            authForm.push({
                id: key,
                config: this.state.controls[key]
            })
        }

        let form = authForm.map(formElement=>(
            <Input 
                key= {formElement.id}
                valued={formElement.id}
                elementType={formElement.config.elementType}
                elementConfig={formElement.config.elementConfig}
                value={formElement.config.value}
                invalid={!formElement.config.valid}
                validation={formElement.config.validation}
                changed={(event)=>this.changeHandler(event, formElement.id)}
                touched={formElement.config.touched}
                />
        ))


        if(this.props.loading){
            form=<Spinner />
        }

        let errorMessage = null;
        if(this.props.error){
        errorMessage = <p>{this.props.error.message}</p>
        }

        let authRedirect = null;
        if(this.props.isAuthenticated){
            authRedirect = <Redirect to='/'/>
        }

        return(
            <div className={classes.Auth}>
                {errorMessage}
                {authRedirect}
                <form onSubmit={this.submitHandler}>
            {form}
            <Button btnType='Success'>SUBMIT</Button>
                </form>
                <Button
                btnType='Danger'
        clicked={this.switchAuthModeHandler}>SWITCH TO {this.state.isSignUp ? 'SIGN-IN' : 'SIGN-UP'}</Button>
            </div>
        )
    }
}

const mapStateToProps = state => {
return{
    isAuthenticated: state.auth.userId !== null,
    loading: state.auth.loading,
    error: state.auth.error
}
}

const mapDispatchToProps = dispatch => {
    return{
        onAuth: (email, password, isSignUp)=> dispatch(actions.authInit(email, password, isSignUp))
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(Auth);