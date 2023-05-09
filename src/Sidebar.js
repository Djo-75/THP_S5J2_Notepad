 function Sidebar({ notes, onAddNote }) {
    return (
    <div className="app-sidebar">
        <div className="app-sidebar-header">
            <h1>Notes</h1>
            <button onClick={onAddNote}>Ajouter</button>
        </div>
        <div className="app-sidebar-notes">  
            {notes.map((note)  => (
            <div className="app-sidebar-note">
            <div className="sidebar-note-title">
                <strong>{note.title}</strong>
                <button>Supprimer</button>
            </div>
            <p>{note.body && note.body.substr(0,100) + "..."}</p> // s'il y a un note.body, alors n'afficher que 100 carac
            <small className="note-meta">
                Last modified {new Date(note.lastModified).toLocaleDateString("en-GB", {
                    hour: "2-digit",
                    minute: "2-digit",
                })}
            </small>
        </div> 
            ))}

        </div>
    </div>

    )
 }

 export default Sidebar; 