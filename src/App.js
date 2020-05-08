import React, { createContext } from "react";
import "./App.css";
import BooksList from "./components/BooksList";
import BooksRead from "./components/BooksRead";
import { BooksProvider } from "./contexts/BooksProvider";

function App() {
  return (
    <BooksProvider>
      <div className="App">
        <BooksList />
        <BooksRead />
      </div>
    </BooksProvider>
  );
}

export default App;
