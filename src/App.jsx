import './App.css'
import React, { Component } from "react";
import Header from "./Header.jsx";
import NotesList from "./NotesList.jsx";

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
    const updatedNotes = this.state.notes.map((note) => {
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

  onSearch = (text) => { // define method that will receive some text
    const newSearchtext = text.toLowerCase(); // convert the text the user submitted to all lower case letters
    const updatedNotes = this.state.notes.map( (note) => { //map over the notes array and for each note object
      if (!newSearchText) { //to make sure user is searching for something
        note.doesMatchSearch = true;
        return note;
      } else {  // check title and description to see if they include the same text user submitted
        const title = note.title.toLowerCase(); //make sure everything is in lower case
        const description = note.description.toLowerCase(); 
        const titleMatch = title.includes(newSearchText);
        const descriptionMatch = description.includes(newSearchText);
        /*if (titleMatch) {
          note.doesMatchSearch = true 
        } else if (descriptionMatch) {
          note.doesMatchSearch = true 
        } else {
          note.doesMatchSearch = false
        }*/ // this code does the same as the two lines below
        const hasmatch = titleMatch || descriptionMatch; 
        note.doesMatchSearch = hasMatch; //Using the OR operator: ||, set the note object’s doesMatchSearch property to true if there is matching text and false if not
        return note;
      }
    });
    this.setState({ // set the state to update the search text and notes within state
      notes: updatedNotes, //notes are now going to be the updatedNotes 
      searchText: newSearchText, // same
    });
  };

  removeNote = (noteId) => { //this function will require the id of the note to remove
    const updatedNotes = this.state.notes.filter( note => note.id !== noteId)
// use this updated notes var and filter through notes array from state, for each note only return the new note as long as new noteID does not match id of note that was passed to use in this method, because thats the one we want to delete. 
    this.setState({ notes: updatedNotes }); //set state and send the notes to updated
  };

  componentDidUpdate() {
    const stringifyNotes= JSON.stringify(this.state.notes);
    localStorage.setItem("savedNotes", stringifyNotes);
}

  componentDidMount() {
    const stringifyNotes = localStorage.getItem("savedNotes");
    if (stringifyNotes) {
      const savedNotes = JSON.parse(stringifyNotes);
      this.setState({ notes: savedNotes });
    }
  }

  render() { 
    return (
      <div className= "app">
        <Header onSearch={this.onSearch} addNote={this.addNote} searchText={this.state.searchText} />
        <NotesList removeNote={this.removeNote} onType={this.onType} notes={this.state.notes} />
      </div>
    );
  }
}
  
export default App;
