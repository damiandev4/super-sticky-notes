import React, { Component } from "react";
import Header from "./Header.jsx";
import NotesList from "./NotesList.jsx";
import './App.css'

class App extends Component {
  
  state = {
    notes: [],
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
    const updatedNotes = this.state.notes.map( note => { //map over the notes array and for each note object
      if (!newSearchText) { //make sure user is searching for something
        note.doesMatchsearch = true;
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
        note.doesMatchSearch = hasmatch; //Using the OR operator: ||, set the note object’s doesMatchSearch property to true if there is matching text and false if not
        return note;
      }
    });
    this.setState.state({ // set the state to update the search text and notes within state
      notes: updatedNotes, //notes are now going to be the updatedNotes 
     searchText: newSearchText, // same
    });
  };

  render() { 
    return (
      <div className= "app">
        <Header onSearch={this.onSearch} addNote={this.addNote} searchText={this.state.searchText} />
        //Pass the onSearch function to the Header component as props
        <NotesList onType={this.onType} notes={this.state.notes} />
      </div>
    );
  }
}
  
export default App;
