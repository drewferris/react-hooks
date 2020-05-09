import React, { useContext, useEffect } from "react";
import { BooksContext } from "../contexts/BooksProvider";

const BooksList = () => {
  const { books, read, get } = useContext(BooksContext);

  useEffect(() => {
    const fetchBooks = async () => {
      const response = await fetch("https://drewferris.dev/api/reading");
      const data = await response.json();
      get(data);
    };

    fetchBooks();
  }, [get]);

  const renderBooks = () => {
    return (
      <div>
        {books.map((book, id) => {
          const { title } = book;
          return (
            <div key={`${id}-${title}`}>
              <p>{id}</p>
              <p>{title}</p>
              <button onClick={read(book)}>+</button>
            </div>
          );
        })}
      </div>
    );
  };

  return renderBooks();
};

export default BooksList;
