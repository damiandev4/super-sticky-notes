import React from "react";

const Header = (props) => {
  const callSearch = (e) => { //Add an onChange event listener to the Header’s text input that calls the callback function
    props.onSearch(e.target.value); //call our onSearch function we passed to this componenet using props and give it the text we searched for
  };
  return (  //create a callback function that uses props to pass a reference to the onSearch method from App component
  <header className="app-header">
    <h1 className="app-header__title">Super Sticky Notes</h1>
    <aside className="app-header__controls">
      <button onClick={props.addNote} className="add-new"> + New Note </button>
      <div className="search-field">
        <img
          src="magnifying-glass-solid-full.svg"
          alt="search icon"
          className="search-icon"
        />
        <label className="visually-hidden" htmlFor="search"> Search notes </label>
        <input
          type="text"
          id="search"
          placeholder="ToDo"
          className="search"
          value= {props.searchText}
          onChange={callSearch}  //Add an onChange event listener to the Header’s text input that calls the callback function

        />
      </div>
    </aside>
  </header>
  );
};

export default Header;
