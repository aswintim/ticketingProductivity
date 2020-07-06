import React from 'react';
import classes from './Input.module.css';

const input = (props) => {
    let formInput = null;
    let inputClasses = [classes.InputElement];
    let validationError = null;

    if(props.validation && props.invalid && props.touched){
        inputClasses.push(classes.Invalid);
    validationError = <p>Please enter a valid {props.valued}!</p>
    }

    switch (props.elementType) {
        case 'input':
            formInput = <input {...props.elementConfig} onChange={props.changed} className={inputClasses.join(' ')}/> //why is not here value attribute???
            break;

        case 'textarea':
            formInput = <textarea {...props.elementConfig} onChange={props.changed} className={classes.InputElement}/>
            break;

        case 'select':
            formInput = <select
                onChange={props.changed}
                value={props.value}
                className={classes.InputElement}
            >
                {props.elementConfig.options.map(option => (
                    <option
                        key={option.value}
                        value={option.value}
                    >{option.displayValue}</option>
                ))}
            </select>
            break;

            default:
                formInput = <input {...props.elementConfig} className={classes.InputElement}/>
    }
    return (
        <div className={classes.Input}>
            {/* <label className={classes.Label}> {props.label}</label> */}
            {formInput}
            {validationError}
        </div>
    )
}

export default input;