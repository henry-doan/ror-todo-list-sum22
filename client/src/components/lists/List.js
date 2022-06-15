import { useState } from 'react'
import ListForm from './ListForm';
import { Link } from 'react-router-dom';

// your show for your obj, single element 
// display all of the field / details of the obj
// id, title, desc, created_at field we are grabbing from props, details
// pull in the update function from props

// pull in the delete function from props
const List = ({ id, title, desc, created_at, updateList, deleteList }) => {
  // keep track of whether or not i am editing
  // by default we are not editing
  const [editing, setEdit] = useState(false)

  // conditional rendering, display different elements based off of a condition 
  // whether we are editing we are going show the form or hide the form
  return (
    <>
      {/* ternary - one liner of if else  */}
      {/* check if we are editing  */}
      {
        editing ?
        <>
          {/* if we are editing we will display the form and cancel button */}
          {/* display form for edit */}
          <ListForm 
            // passing all the field of the obj to the form
            // props - properties pass from one component to another 
            // calling the prop= setting that to, function, value 
            id={id} 
            title={title}
            desc={desc}
            // pass through props the update function
            updateList={updateList}
            // pass in the function to close out the form
            setEdit={setEdit}
          />
          <button onClick={() => setEdit(false)}>Cancel</button>
        </>
        :
        <>
          {/* else not editing than display the details */}
          <div>
            <h3>Title: {title}</h3>
            <h3>Description: {desc}</h3>
            <h5>Created At: {created_at}</h5>
            {/* button for me to edit */}
            {/* when i click on the button, change the state of edit from fasle to true */}
            {/* () => only trigger the logic when we press the button */}
            <button onClick={() => setEdit(true)}>Edit</button>
            {/* click on button to delete obj */}
            {/* press the button, then it does the delete function passing id  */}
            {/* () => only trigger the logic when we press the button */}
            <button onClick={() => deleteList(id)}>Delete</button>
            {/* what ever i click on it passes the parent id */}
            <Link to={`/${id}/todos`}>
              Todos
            </Link>
            <hr />
          </div>
          <br />
        </>
      }
    </>
  )
}

export default List;