import Note from './Note';

const NoteList = ({ notes, updateNote, deleteNote }) => (
  <>
    <h1>All Notes</h1>
    {
      notes.map( n => 
        <Note
          key={n.id}
          {...n}
          updateNote={updateNote}
          deleteNote={deleteNote}
        />
      )
    }
  </>
)
export default NoteList;