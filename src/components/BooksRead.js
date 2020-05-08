import React, { useContext } from "react";
import { BooksContext } from "../contexts/BooksProvider";

const BooksRead = () => {
  const { books, setBooks, booksRead, setBooksRead } = useContext(BooksContext);

  const removeFromRead = (book) => {
    setBooks([...books, book]);
    setBooksRead(booksRead.filter((readBook) => book !== readBook));
  };

  const renderBooks = () => {
    return (
      <div>
        {booksRead.map((book) => {
          const { name, id } = book;
          return (
            <div key={`${id}-${name}`}>
              <p>{id}</p>
              <p>{name}</p>
              <button onClick={() => removeFromRead(book)}>-</button>
            </div>
          );
        })}
      </div>
    );
  };

  return renderBooks();
};

export default BooksRead;
