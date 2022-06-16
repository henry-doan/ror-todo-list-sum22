import { useState, useEffect } from 'react';

const TodoForm = ({ addTodo, id, title, rating, price, complete, list_id, updateTodo, setEdit }) => {
  // for boolean like complete, might not need a input for create
  const [todo, setTodo] = useState({ title: '', rating: 1, price: 0.0, complete: false })

  useEffect( () => {
    if (id) {
      setTodo({ title, rating, price, complete })
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    // front end validations 
    // make sure the rating is a int, and price is a float
    setTodo({ ...todo, rating: parseInt(todo.rating), price: parseFloat(todo.price) })
    
    // make sure rating is 1 - 5
    if (todo.rating < 1 || todo.rating > 5) {
      alert('Hey, rating 1 - 5 only')
    } else {
      if (id) {
        updateTodo(id, todo)
        setEdit(false)
      } else {
        // adding 
        addTodo(todo)
      }
      setTodo({ title: '', rating: 1, price: 0.0, complete: false })
    }
  }

  return (
    <>
      <h1>{ id ? "Update" : "Create" } Todo</h1>
      <form onSubmit={handleSubmit}>
        <input 
          name='title'
          value={todo.title}
          onChange={(e) => setTodo({...todo, title: e.target.value })}
          required 
          placeholder="Title"
        />
        <label>Rating out of 1-5</label>
        <input
          type='number'
          name='rating'
          value={todo.rating}
          onChange={(e) => setTodo({...todo, rating: e.target.value })}
          required
        />
        <label>Price of todo in $ </label>
        <input 
          type='number'
          name='price'
          value={todo.price}
          onChange={(e) => setTodo({...todo, price: e.target.value })}
          required
        />
        {/* how we are handling booleans */}
        <label>Completed ?</label>
        <input
          type='checkbox'
          name='complete'
          checked={todo.complete}
          onChange={(e) => setTodo({...todo, complete: !todo.complete })}
        />
        <button type='submit'>Submit</button>
      </form>
    </>
  )
}

export default TodoForm;