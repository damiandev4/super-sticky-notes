import React from "react";
import Note from "./Notes.jsx";

const NotesList = (props) => {
  const renderNote = (note) => <Note note={note} key={note.id} />;
  const noteElements = props.notes.map(renderNote);
  return <ul className="notes-list">{noteElements}</u>;
};

export default NotesList;