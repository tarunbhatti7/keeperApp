import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  // state for storing the array of notes
  const [notesarray, setnotesarray] = useState([]);
  // adding the notes when we click on the add button
  function addnotes(note) {
    setnotesarray((prevNote) => {
      return [...prevNote, note];
    });
  }
  function notedelete(id) {
    setnotesarray((prevNotes) => {
      return prevNotes.filter((note, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div>
      <Header />
      <CreateArea onAdd={addnotes} />
      {/* <Note key={1} title="Note title" content="Note content" /> */}
      {notesarray.map((notes, index) => {
        return (
          <Note
            key={index} //unique key for all the note
            id={index} // id number for all the notes
            title={notes.title}
            content={notes.content}
            deletenote={notedelete}
          />
        );
      })}

      <Footer />
    </div>
  );
}

export default App;
