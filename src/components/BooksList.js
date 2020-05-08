import React, { useContext } from "react";
import { BooksContext } from "../contexts/BooksProvider";

const BooksList = () => {
  const { books, setBooks, booksRead, setBooksRead } = useContext(BooksContext);

  const read = (book) => {
    setBooksRead([...booksRead, book]);
    setBooks(removeBookFromList(book));
  };

  const removeBookFromList = (removedBook) => {
    return books.filter((book) => book !== removedBook);
  };

  const renderBooks = () => {
    return (
      <div>
        {books.map((book) => {
          const { name, id } = book;
          return (
            <div key={`${id}-${name}`}>
              <p>{id}</p>
              <p>{name}</p>
              <button onClick={() => read(book)}>+</button>
            </div>
          );
        })}
      </div>
    );
  };

  return renderBooks();
};

export default BooksList;
