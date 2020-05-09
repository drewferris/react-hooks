import React, { useContext, useState } from "react";
import { BooksContext } from "../contexts/BooksProvider";
import { generateID } from "../utils/generateID";

const BookForm = () => {
  const { add } = useContext(BooksContext);
  const [title, setTitle] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();
    add({
      id: generateID(),
      title,
    });
  };

  const handleTitleOnChange = (event) => setTitle(event.target.value);
  return (
    <form onSubmit={handleFormSubmit}>
      <input
        type="text"
        placeholder="Book title"
        onChange={handleTitleOnChange}
      />
      <input type="submit" value="Add" />
    </form>
  );
};

export default BookForm;
