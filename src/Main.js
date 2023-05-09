function Main() {
  return (
    <div className="app-main">
      <div className="app-main-note-edit">
        <input type="text" id="title" autoFocus />
        <textarea id="body" placeholder="Ecris ton com's" />
      </div>

      <div className="app-main-note-preview">
        <h1 className="preview-title">TITLE</h1>
        <div className="markdown-preview">Preview</div>
      </div>
    </div>
  );
}

export default Main;
