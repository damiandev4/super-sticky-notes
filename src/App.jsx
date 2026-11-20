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
  }

  render() { 
    return (
      <div className= "app">
        <Header addNote={this.addNote} searchText={this.state.searchText} />
        <NotesList notes={this.state.notes} />
      </div>

    );
  }
}
  
export default App;
