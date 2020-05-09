import React from "react";
import "./App.css";
import BooksList from "./components/BooksList";
import BooksRead from "./components/BooksRead";
import BookForm from "./components/BookForm";
import { BooksProvider } from "./contexts/BooksProvider";

function App() {
  return (
    <BooksProvider>
      <div className="App">
        <BooksList />
        <BooksRead />
        <BookForm />
      </div>
    </BooksProvider>
  );
}

export default App;
