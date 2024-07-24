import React, { useState } from "react";

//INPUT BOX where we have to add the title and notes
function CreateArea(props) {
  // create the object having the title and content
  const [note, setnote] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    //  there are 2 input box
    const { name, value } = event.target;
    setnote((prevNote) => {
      return {
        ...prevNote, // prevNote will appear
        [name]: value, // and new value will add }
      };
    });
  }
  function submitClick(event) {
    props.onAdd(note);
    // after adding the notes after clicking on the add button just clear the input and text area
    setnote({
      title: "",
      content: "",
    });
    event.preventDefault(); // this is not refresh the page again and again when we use the functions of the app
  }
  return (
    <div>
      <form>
        {/* input box for title */}
        <input
          onChange={handleChange}
          name="title"
          placeholder="Title"
          value={note.title}
        />
        {/* textarea for note */}
        <textarea
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={note.content}
        />
        <button onClick={submitClick}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
