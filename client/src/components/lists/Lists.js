import { useState, useEffect } from 'react';
import axios from 'axios';
import ListForm from './ListForm';
import AllList from './AllList';

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
      .then( res => {
        setLists(res.data) 
      }) // grab all the list from our db and store with in our state 
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

  // update action
  // pass in two params, id, which one we are updating , list , object we are updating to
  const updateList = (id, list) => {
    // update with in the back end
    // passing list { list: { title: 'office' desc: 'table supplies' }}
    axios.put(`/api/lists/${id}`, { list })
      .then( res => {
        // this will update the obj in the front end 
        
        // variable to store our new list array with the updated obj
        // go through each of the list, for each obj we are call l
        let newUpdatedLists = lists.map( l => {
          // look for the one i am updating
          if (l.id === id) {
            return res.data // return update obj from db to the front end
          }
          return l // continue to look for the obj
        })
        // store the new updated array to our state
        setLists(newUpdatedLists)
      })
      .catch( err => console.log(err) ) // console log err
  }

  // delete action 
  // delete obj in the backend then front end 
  // when calling the function i need to pass in the ID
  const deleteList = (id) => {
    // destroy in the controller, with id we are passing in
    axios.delete(`/api/lists/${id}`)
      .then( res => {
        // delete in the front end 

        // go through the array of obj and filter 
        // filter return an array based off of a condition 
        // if the list.id that we are looping through is not the id of the one we are deleteing, then we are keeping in the array
        // filter out the one we are deleting
        // storing the list of the filtered out element to state
        setLists( lists.filter( l => l.id !== id ) )
        // res.data.message
        alert(res.data.message)
      })
      .catch( err => console.log(err) ) // console log err
  }

  return (
    <>
    {/* display a component, and pass in the add function to the component to use */}
      <ListForm addList={addList} />
      {/* component to display all the lists */}
      {/* passing all the list im storing in the state through props to the all list component */}
      <AllList 
        lists={lists}
        // pass in the update function to all list to pass into list.
        updateList={updateList}
        // pass the delete function to the all list for the list to use in the button
        deleteList={deleteList}
      />
    </>
  )
}

export default Lists;