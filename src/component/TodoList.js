import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

const TodoList = ({TODO}) => {
  return ( 
        <table className='mx-auto'>
            <div className='bg-purple-600 font-bold text-white flex justify-between mb-8'>
              <span><FontAwesomeIcon icon={faBars} className='pt-3 pl-3 pb-3 pr-3'/></span>
              <span className='self-center'>Website todo</span>
              <span className='opacity-0'></span>
            </div>
              <ul className='shadow-lg pl-10 pb-10 pr-10'>
                {TODO.map((todo, index) => (
                  <li key={index} className='list-none flex text-slate-400 justify-between' > 
                      <div>
                        <input type='radio' checked={todo.completed} className='accent-purple-700'/>
                        <span className='pl-8' >{todo.title}</span>
                      </div>
                      {todo.completed && <FontAwesomeIcon icon={faTrashCan} className='line-through'/>}
                  </li>
                ))}
              </ul>
        </table>
  )
}

export default TodoList
