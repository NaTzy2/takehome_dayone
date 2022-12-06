import React from "react";

const Input = (props)=>{
    return <input type="text" onChange = {props.cin} value = {props.val} placeholder = 'What To Do...'></input>
}

export default Input