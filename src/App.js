import { useState } from 'react'
import { v4 as uuid } from "uuid";
import './App.css';
import Sidebar from "./Sidebar";
import Main from "./Main";

function App() {

  const [notes, setNotes] = useState([])
  const [activeNote, setActiveNote] = useState(false)
  
  const onAddNote = () => {
    const newNote = {
      id: uuid(),
      title: "Sans titre",
      body: "",
      lastModified: Date.now(),
    };

    setNotes([newNote, ...notes]); // new array qui ajoute notre nouvel object aux current objects
  };

  const onDeleteNote = (idToDelete) => {
    setNotes(notes.filter((note) => note.id !== idToDelete)) // si note.id = idToDelete, noted.id sera supprimé de l'array. Si pas égal, il reste dans l'array
  }


  const onUpdateNote = (updatedNote) => {
    const updatedNotesArray = notes.map((note) => {
      if (note.id === updatedNote.id) {
        return updatedNote;
      }

      return note
    });

    setNotes(updatedNotesArray)
  }

  const getActiveNote = () => {
    return notes.find((note) => note.id === activeNote);
  }

  return (
    <div className="App">
      <Sidebar notes={notes} onAddNote={onAddNote} onDeleteNote={onDeleteNote} activeNote={activeNote} setActiveNote={setActiveNote} />
      <Main 
      activeNote={getActiveNote()} 
      onUpdateNote={onUpdateNote} />
    </div>
  );
}

export default App;
