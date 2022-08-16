import React from 'react'
import { useState } from 'react'

function TaskForm() {

        const [title, setTitle] = useState('');

        const handleSubmit = (e) => {
            e.preventDefault();
            console.log(title)
        }

  return (
    <div>
        <form onSubmit={ handleSubmit }>
            <input placeholder='Escribe tu tarea' 
                onChange={function(e) {setTitle(e.target.value)}} // (e) => console.log(e.target.value)
            />
            <button>Guardar</button>
        </form>
    </div>
  )
}

export default TaskForm