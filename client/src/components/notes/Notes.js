import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import NoteList from './NoteList';
import NoteForm from './NoteForm';

const Notes = () => {
  const [notes, setNotes] = useState([])

  // const params = useParams()
  // const { todoId } = params
  // or 
  const { todoId } = useParams();
  
  useEffect( () => {
    axios.get(`/api/todos/${todoId}/notes`)
      .then( res => setNotes(res.data) )
      .catch( err => console.log(err) )
  }, [])

  const addNote = (note) => {
    axios.post(`/api/todos/${todoId}/notes`, { note })
      .then( res => setNotes([...notes, res.data]) )
      .catch( err => console.log(err) )
  }
  
  const updateNote = (id, note) => {
    axios.put(`/api/todos/${todoId}/notes/${id}`, { note })
      .then( res => {
        const newUpdateNotes = notes.map(n => {
          if (n.id === id) {
            return res.data
          }
          return n
        })
        setNotes(newUpdateNotes)
      })
      .catch( err => console.log(err) )
  }

  const deleteNote = (id) => {
    axios.delete(`/api/todos/${todoId}/notes/${id}`)
      .then( res => setNotes(notes.filter( n => n.id !== id)))
      .catch( err => console.log(err) )
  }

  return (
    <>
      <NoteForm addNote={addNote}/>
      <NoteList
        notes={notes}
        updateNote={updateNote}
        deleteNote={deleteNote}
      />
    </>
  )
}

export default Notes;