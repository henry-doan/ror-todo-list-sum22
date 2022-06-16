import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

const Todos = () => {
  // grab the list id from the url 
  const params = useParams()
  const { listId } = params

  const [todos, setTodos] = useState([])

  useEffect( () => {
    // because of the parent and child relationship
    // i need to include the parent's id 
    // grabbing id from the url 
    axios.get(`/api/lists/${listId}/todos`)
      .then( res => {
        setTodos(res.data)
      })
      .catch( err => console.log(err) )
  }, [])

  // might need to pass in the parent id if you don't have it in the url
  // const addTodo = (listId, todo) => {
  const addTodo = (todo) => {
    axios.post(`/api/lists/${listId}/todos`, { todo })
      .then( res => {
        setTodos([...todos, res.data])
      })
      .catch( err => console.log(err) )
  }

  const updateTodo = (id, todo) => {
    axios.put(`/api/lists/${listId}/todos/${id}`, { todo } )
      .then(res => {
        let newUpdatedTodos = todos.map( t => {
          if (t.id === id) {
            return res.data 
          }
          return t
        })
        setTodos(newUpdatedTodos)
      })
      .catch( err => console.log(err) )
  }

  const deleteTodo = (id) => {
    axios.delete(`/api/lists/${listId}/todos/${id}`)
      .then( res => {
        setTodos(todos.filter( t => t.id !== id ))
      })
      .catch( err => console.log(err) )
  }

  return (
    <>
      <TodoForm addTodo={addTodo} />
      <TodoList 
        todos={todos}
        updateTodo={updateTodo}
        deleteTodo={deleteTodo}
      />
    </>
  )
}

export default Todos;