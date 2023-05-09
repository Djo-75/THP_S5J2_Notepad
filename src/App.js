import { useState } from 'react'
import uuid from 'react-uuid'
import './App.css';
import Sidebar from "./Sidebar";
import Main from "./Main";

function App() {

  const [notes, setNotes] = useState([])
  const onAddNote = () => {
    const newNote = {
      id: uuid(),
      title: "Sans titre",
      body: "",
      lastModified: Date.now(),
    };

    setNotes([newNote, ...notes]); // new array qui ajoute notre nouvel object aux current objects
  
  }

  const onDeleteNote = (idToDelete) => {
    setNotes(notes.filter((note) => note.id !== idToDelete)) // si note.id = idToDelete, noted.id sera supprimé de l'array. Si pas égal, il reste dans l'array
  }

  return (
    <div className="App">
      <Sidebar notes={notes} onAddNote={onAddNote} onDeleteNote={onDeleteNote}/>
      <Main />
    </div>
  );
}

export default App;
