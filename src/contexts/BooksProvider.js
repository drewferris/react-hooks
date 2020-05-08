import React, { createContext, useState } from "react";

export const BooksContext = createContext();

export const BooksProvider = (props) => {
  const [books, setBooks] = useState([
    { id: 1, name: "War and Peace" },
    { id: 2, name: "Crime and Punishment" },
    { id: 3, name: "Notes from the Underground" },
  ]);

  const [booksRead, setBooksRead] = useState([]);

  const providerValue = {
    books,
    setBooks,
    booksRead,
    setBooksRead,
  };

  return (
    <BooksContext.Provider value={providerValue}>
      {props.children}
    </BooksContext.Provider>
  );
};
