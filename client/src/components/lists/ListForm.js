import { useState, useEffect } from 'react';

// form for now, add function 
// display inputs for each field of the object
// have the user type in the input and save it to state 
// handle submit, run the add function
// pull in our props

// pull in the props for the update, field of the obj, function to update, function to close the form
const ListForm = ({ addList, id, title, desc, updateList, setEdit }) => {
  // const [list, setList] = useState({ title: '', desc: '', age: 0, price: 0.0, friendly: false })
  // this is where we are storing the user input 
  // initial values for each field and datatypes
  const [list, setList] = useState({ title: '', desc: '' })

  // run logic before we display on the page
  useEffect( () => {
    // check if we are editing
    if (id) {
      // setList({ title: title, desc: desc })
      // prepropulate the form with the title and desc
      setList({ title, desc })
    }
  }, [])

  // what happen when we submit the form
  // more front end validations comming 
  const handleSubmit = (e) => {
    // stop from reloading, losing data from state
    // stop put the input in the url
    // setList({ ...list, age: parseInt(list.age)})
    e.preventDefault()

    // check if we are editing 
    if (id) {
      // call the update list function, id list, object that we are updating the item too 
      updateList(id, list)

      // close out the form 
      setEdit(false)
    } else {
      // add function, pass in the list im storing in state
      addList(list)
    }

    // clear out the form
    // set the state to initial value
    setList({ title: '', desc: '' })
  }

  // build out the form of how it looks like 
  // each field should have their own input
  return (
    <>
      <h1>{id ? "Edit" : "Create" } List </h1>
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        {/* input for the title */}
        <input 
          // need these there things in the all inputs 
          name='title' // what is this input for 
          value={list.title} // where we are storing the value
          // how we are storing the value
          // e is the event of typing in the input
          // storing the value into our state 
            // storing all the fields that where already stored
            // title is what the user typed
          onChange={ (e) => setList({ ...list, title: e.target.value })} 

          // optional 
          required // make sure you fill it out before you submit
          placeholder='title' // text within the input box
        />
        {/* for text datatype */}
        <textarea
          name='desc'
          value={list.desc}
          onChange={(e) => setList({ ...list, desc: e.target.value})}
        ></textarea>
        <button type='submit'>{id ? "Update" : "Submit" }</button>
      </form>
    </>
  )
}

export default ListForm;