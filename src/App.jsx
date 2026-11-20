import React, { Component } from "react";
import Header from "./Header.jsx";
import NotesList from "./NotesList.jsx";
import './App.css'

class App extends Component {
  
state = {
  notes: [
    {
      id: Date.now(),
      title: "",
      description: "",
      doesMatchSearch: true,
    },
  ],
  searchText: "",
};

  addNote = () => {
    //create a new note (or object)
    const newNote = {
      id: Date.now(),
      title: "",
      description: "",
      doesMatchSearch: true,
    };
    //add new note to existing notes array in state
    this.setState({ notes: [newNote, ...this.state.notes]})
  };

  onType = (editMeID, updatedKey, updatedValue) => {
    // editMeId == id of the note that is edited
    // updatedKey == title or description field
    // updatedValue == value of title or description
    const updatedNotes = this.state.notes.map(  note => {
      if (note.id !== editMeId) {
        return note;
      } else {
        if (updatedKey === "title") {
          note.title = updatedValue;
          return note;
        } else {
          note.description = updatedValue;
          return note;
        }
      }
    });
    this.setState({ notes: updatedNotes });
  };

  render() { 
    return (
      <div className= "app">
        <Header addNote={this.addNote} searchText={this.state.searchText} />
        <NotesList onType={this.onType} notes={this.state.notes} />
      </div>

    );
  }
}
  
export default App;
