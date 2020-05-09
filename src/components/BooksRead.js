import React, { useContext } from "react";
import { BooksContext } from "../contexts/BooksProvider";

const BooksRead = () => {
  const { booksRead, remove } = useContext(BooksContext);

  const renderBooks = () => {
    return (
      <div>
        {booksRead.map((book, id) => {
          const { title } = book;
          return (
            <div key={`${id}-${title}`}>
              <p>{id}</p>
              <p>{title}</p>
              <button onClick={remove(book)}>-</button>
            </div>
          );
        })}
      </div>
    );
  };

  return renderBooks();
};

export default BooksRead;
