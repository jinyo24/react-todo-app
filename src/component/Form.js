import React, {Component} from 'react';

function TodoForm({addToDo}) {
    const [value, setValue] = React.useState('');
    
    const handleSubmit = e => {
        e.preventDefault();
        addToDo(value);
        if (!value) return;
        setValue('');
      };

    return (
        <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          className="newtask" 
          value={value} 
          placeholder="Enter a new task"
          onChange={e => setValue(e.target.value)}/> 
      </form>
    )
            
};

export default TodoForm;