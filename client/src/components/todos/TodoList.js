import Todo from './Todo';

const TodoList = ({ todos, updateTodo, deleteTodo }) => (
  <>
    <h1>All Todos</h1>
    { todos.map( t => 
      <Todo
        key={t.id}
        {...t}
        updateTodo={updateTodo}
        deleteTodo={deleteTodo}
      />
    )}
  </>
)

export default TodoList;