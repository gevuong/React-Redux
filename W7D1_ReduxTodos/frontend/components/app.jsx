import React from 'react';
import TodoListContainer from './todo_list/todo_list_container';


// just for rendering, it's okay to create react component with fat arrow function
const App = (store) => {
  return(
    <div>
      <h1>Todo App Academy</h1>
        <TodoListContainer />
    </div>

  );
};

export default App;
