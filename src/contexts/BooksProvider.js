import React, { createContext, useState, useReducer } from "react";
import { bookReducer, READ, REMOVE, ADD, GET } from "../reducers/BookReducer";

export const BooksContext = createContext();

export const BooksProvider = (props) => {
  const defaultState = {
    books: [],
    booksRead: [],
  };
  const [state, dispatch] = useReducer(bookReducer, defaultState);

  const read = (book) => () => {
    dispatch({ type: READ, book });
  };

  const remove = (book) => () => {
    dispatch({ type: REMOVE, book });
  };

  const add = (book) => {
    dispatch({ type: ADD, book });
  };

  const get = (books) => {
    dispatch({ type: GET, books });
  };

  const { books, booksRead } = state;

  const providerValue = {
    books,
    booksRead,
    read,
    remove,
    add,
    get,
  };

  return (
    <BooksContext.Provider value={providerValue}>
      {props.children}
    </BooksContext.Provider>
  );
};
