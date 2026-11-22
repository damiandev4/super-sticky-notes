import React from "react";

const Note = (props) => {
  const updateTitle = (e) => {
    const updatedValue = e.target.value;
    const editMeId = props.notes.id; //id of the note is assigned to teh variable editMeID
    props.onType(editMeId, "title", updatedValue); //onType method passed down from App as prop, call it passing it first the editMeID/Note’s id, the field and the updatedKey parameter which is updatedValue.
  };

  const updateDescription = (e) => {
    const updatedValue = e.target.value;
    const editMeId = props.notes.id; //id of the note is assigned to teh variable editMeID
    props.onType(editMeId, "description", updatedValue); //onType method passed down from App as prop, call it passing it first the editMeID/Note’s id, the field and the updatedKey parameter which is updatedValue.
  };

  const clickDelete = (e) => {
    props.removeNote(props.note.id) 
    //call props to pass a reference to the remove method from App to each Note component
    //or call remove method passed down in props and pass it the note id, which is in the note object that is also avail in props
  }


  return (
    <li className="note">
      <input
        type="text"
        aria-label="Title"
        placeholder="ToDo Today"
        className="note__title"
        value={props.note.title}
        onChange={updateTitle}
      />
      <textarea
        aria-label="Description"
        placeholder="Take a nap!"
        className="note__description"
        value={props.note.description}
        onChange={updateDescription}
      />
      <span className="note__delete" onClick={clickDelete} >X</span>
    </li>
  );
};

export default Note;
