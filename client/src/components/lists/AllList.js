import List from './List';

// component to display all the lists 
// list - from lists component, array of obj 
// all the list from the db and in the front 
// end component state

// updatelist, pass from Lists component to update both front and back end
// pass in the update to a single obj, List

// deleteList, pass from Lists component, to delete both front end and back end
const AllList = ({ lists, updateList, deleteList }) => (
  <>
    <h1>All Lists</h1>
    {/* map through the list, and render a single list component */}
    
    {
      lists.map( l => 
        // this will return a single obj component
        <List 
          key={l.id} // unique id 
          // need pass all of the field 
          // id={l.id} title={l.title} desc={l.desc}
          {...l} // spread out the content of l 
          updateList={updateList} // pass in to the list as props to use in the Show component
          deleteList={deleteList} // pass into the List Component as props to be used in the show component on the button
        />
      )
    }
  </>
)

export default AllList;