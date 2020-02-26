import React from 'react';
import './Person.css';
const person = (props) => {
    return (
        <div onClick={props.click} className="Person">
            <p>From Person  {props.name}  {Math.floor(Math.random() * 30)} </p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    )
}

export default person;