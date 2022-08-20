import React from 'react'
import { useState } from 'react'

function TaskForm( {createTask} ) {

        const [title, setTitle] = useState('');
        const [description, setDescription] = useState('');

        const handleSubmit = (e) => {
            e.preventDefault();
            createTask({
                title, description
            });
            setTitle('');
            setDescription('');
        }

  return (
    <div>
        <form onSubmit={ handleSubmit }>
            <input placeholder='Escribe tu tarea' 
                onChange={function(e) {setTitle(e.target.value)}} // (e) => console.log(e.target.value)
                value={title}
                autoFocus
            />
            <textarea placeholder='Describe la tarea'
                onChange={(e) => setDescription(e.target.value)}
                value={description}
            ></textarea>
            <button>Guardar</button>
        </form>
    </div>
  )
}

export default TaskForm