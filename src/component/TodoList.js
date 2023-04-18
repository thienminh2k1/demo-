import React from 'react'
import { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

const TodoList = ({todos}) => {

  return (
        <table>
            <div style={{backgroundColor: 'Purple', fontWeight: 'bold', textAlign: 'center', color: 'white', display: 'flex', justifyContent: 'space-between'}}>
              <span><FontAwesomeIcon icon={faBars} style={{padding: '10 12'}}/></span>
              <span style={{alignSelf: 'center'}}>Website todo</span>
              <span style={{opacity: 0}}></span>
            </div>
              <ul style={{ boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'}}>
                {todos.map((todo, index) => (
                  <li key={index} style={{listStyleType: 'none', color: 'grey', display: 'flex'}}> 
                    <input type='radio' checked={todo.completed} style={{color: 'purple', accentColor: 'purple'}} />
                      <span style={{paddingLeft: 20}} >{todo.title}</span>
                  </li>
                ))}
              </ul>
        </table>

  )
}

export default TodoList
