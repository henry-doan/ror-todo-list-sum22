import { useParams } from 'react-router-dom';

const Todos = () => {
  // grab the list id from the url 
  const params = useParams()
  const { listId } = params

  return (
    <>
      Todo page list id: { listId }
    </>
  )
}

export default Todos;