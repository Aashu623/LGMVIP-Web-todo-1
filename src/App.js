import './App.css';
import InputControl from './components/InputControl';
import Todolist from './components/Todolist';
import React, { useState } from 'react';

function App() {
  const [listTodo, setListTodo] = useState([]);

  const addList = (inputText) => {
    if (inputText !== '') {
      setListTodo([...listTodo, inputText]);
    }
  }
  const deleteItem = (key) => {
    let newListTodo = [...listTodo];
    newListTodo.splice(key, 1)
    setListTodo([...newListTodo])
  }
  return (
    <div className="App">
        <h1>ToDo App</h1>
      <div className='container'>
        <InputControl addList={addList} />
        {
          listTodo.map((listItem, i) => {
            return (
              <Todolist key={i} index={i} item={listItem} deleteItem={deleteItem} />
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
