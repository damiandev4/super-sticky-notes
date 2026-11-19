import React, { Component } from "react";
import Header from "./Header.jsx";
import NotesList from "./NotesList.jsx";
import './App.css'

class App extends Component {
  state = {
    notes: [
     {
        id: 0,
        title: "eat",
        description: "reese peanut butter cups",
        doesMatchSearch: true
      },
      {
        id: 1,
        title: "sleep",
        description: "eight hours",
        doesMatchSearch: true
      },
      {
        id: 2,
        title: "code",
        description: "build an awesome ui",
        doesMatchSearch: true
      },
    ],
    searchText: "search",
  };

  render() { 
    return (
      <div className= "app">
        <Header />
        <NotesList />
      </div>
    );
  }
}
  
export default App;
