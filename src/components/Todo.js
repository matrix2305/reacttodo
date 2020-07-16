import React from "react";

const Todo = ({todo, index, markTodo, deleteTodo}) => {
    return(
        <div className='col-4'>
            <div className='card mt-3 text-center'>
                <div className='card-header'>
                    <h4>Todo: {index+1}</h4>
                </div>
                <div className='card-body'>
                    <h3 className={todo.done ? 'complete' : 'incomplete'}>{todo.msg}</h3>
                </div>
                <div className='card-footer'>
                    <button className='btn btn-danger float-left' onClick={() => {deleteTodo(index)}}>Delete</button>
                    <button className='btn btn-warning float-right' onClick={() => { markTodo(index)}}>Mark</button>
                </div>
            </div>
        </div>
    )
}

export default Todo;