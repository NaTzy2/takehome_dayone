import React, { useState } from "react";
import {v4 as uuidv4} from 'uuid'

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import Button from "./component/button/Button";
import Input from "./component/input/Input";

const App = ()=>{
  const[todo, setTodo] = useState('')
  const[list, setList] = useState([])

  const saveTodo = (e)=>{
    setTodo(e.target.value)
  }

  const addTodo = (e)=>{
    e.preventDefault()
    setList([...list, {id: uuidv4(), title: todo, completed: false}])
    setTodo('')
  }

  return(
    <div className="container">
      <div className="wrapper">
        
        <div>
          <header><h2>Todo List</h2></header>
        </div>

        <div>
          <form onSubmit={addTodo}>
            <Input cin = {saveTodo} val = {todo}/>
            <Button name={'Add'}/>
          </form>
        </div>

        <main>
          <div>
              {list.map((list)=>(
                <li class='todoList' key={list.id}>
                  <p>{list.title}</p>
                </li>
              ))}
          </div>
        </main>

      </div>
    </div>
  )
}

export default App