export const READ = "READ";
export const REMOVE = "REMOVE";
export const ADD = "ADD";
export const GET = "GET";

const getBooksList = (books, readBook) => {
  return books.filter((book) => book !== readBook);
};

const readBook = (book, state) => ({
  books: getBooksList(state.books, book),
  booksRead: [...state.booksRead, book],
});

const getbooksRead = (booksRead, removedBook) => {
  return booksRead.filter((book) => book !== removedBook);
};

const removeBook = (removedBook, state) => ({
  books: [...state.books, removedBook],
  booksRead: getbooksRead(state.booksRead, removedBook),
});

const addBook = (book, state) => ({
  ...state,
  books: [...state.books, book],
});

const getBooks = (books, state) => ({
  books,
  booksRead: state.booksRead,
});

export const bookReducer = (state, action) => {
  switch (action.type) {
    case READ:
      return readBook(action.book, state);
    case REMOVE:
      return removeBook(action.book, state);
    case ADD:
      return addBook(action.book, state);
    case GET:
      return getBooks(action.books.items, state);
    default:
      return state;
  }
};
