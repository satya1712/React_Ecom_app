import React, { useState } from 'react'

const Todo = () => {
    const [todo,setTod0] = useState([]);
    const [ inputvalue,setInputvalue] = useState('');
    
    const handleSubmit = (e) =>{
            e.preventDefault();
            setTod0([...todo,inputvalue]);
            setInputvalue('');
            

    }
    const handleChange = (e)=>{
        setInputvalue(e.target.value)
    }

  return (
    <div>
        <h1>Todo</h1>
        <form onSubmit={handleSubmit} >
            <input type="text" value={inputvalue} onChange={handleChange}/> 
            <button type='submit'> Add TODo</button>
        </form>
        {
            todo.map((t,i)=>(
                <ul key={i}>
                    <li>{t}-{i}</li>
                </ul>
            ))
        }
        
    </div>
  )
}

export default Todo     