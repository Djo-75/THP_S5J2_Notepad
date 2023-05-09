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

  return (
    <div className="App">
      <Sidebar notes={notes} onAddNote={onAddNote }/>
      <Main />
    </div>
  );
}

export default App;
