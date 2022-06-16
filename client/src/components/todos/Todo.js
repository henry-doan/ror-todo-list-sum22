import { useState } from 'react';
import { Link } from 'react-router-dom';
import TodoForm from './TodoForm';

const Todo = ({ id, title, price, rating, complete, list_id, updateTodo, deleteTodo }) => {
  const [editing, setEdit] = useState(false)

  return (
    <>
      {
        editing ?
        <>
          <TodoForm
            id={id}
            title={title}
            price={price}
            rating={rating}
            complete={complete}
            list_id={list_id}
            updateTodo={updateTodo}
            setEdit={setEdit}
          />
          <button onClick={() => setEdit(false)}>Cancel</button>
        </>
        :
        <>
          <h2>Todo#{id} {title}</h2>
          <p>Price: ${price}</p>
          <p>Rating: {rating}/5</p>
          <p>{ complete ? "Completed" : " Not Complete"}</p>
          <button onClick={() => setEdit(true)}>Edit</button>
          <button onClick={() => deleteTodo(id)}>Delete</button>
          <Link to={`/${id}/notes`}>
            Notes
          </Link>
        </>
      }
    </>
  )
}

export default Todo;