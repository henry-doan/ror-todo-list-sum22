import { useState, useEffect } from 'react';
import axios from 'axios';
import ListForm from './ListForm';

// In charge of all of our CRUD actions, display the components that 
// make up the list page
const Lists = () => {
  // storing all our list items in our front
  const [lists, setLists] = useState([])

  // useEffect - run the code before i display on the screen
  useEffect( () => {
    // run my index action in my controller
    // return all our list from db
    axios.get('/api/lists')
      .then( res => setLists(res.data) ) // grab all the list from our db and store with in our state 
      .catch( err => console.log(err) ) // console log err
  }, [])

  // Add Action , pass in a list obj { title: 'Grocery', desc: 'Food for the week' }
  const addList = (list) => {
    // run the create action with in controller
    // { list: { title: 'Grocery', desc: 'Food for the week' } }
    axios.post('/api/lists', { list })
      .then( res => {
        // adding the new item to our front end
        // new array, spread out all the list that was already there
        // keep all the ones that are there
        // at the end add in the new item from our backend
        setLists([...lists, res.data])
      })
      .catch( err => console.log(err) ) // console log err
  }

  return (
    <>
    {/* display a component, and pass in the add function to the component to use */}
      <ListForm addList={addList} />
    </>
  )
}

export default Lists;