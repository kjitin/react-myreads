import React from 'react';
import Book from './Book';

const BookShelf = (props) =>{

  const {shelf, books, onMove} = props;

  return(
  <div className="bookshelf">
    <h2 className="bookshelf-title">{props.name}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
        {
         books.filter(book =>book.shelf === shelf)
         .map((book) => (
         <Book
          key={book.id}
          onMove={onMove}
          shelf={shelf}
          book={book} />
         ))
        }
       </ol>
     </div>
  </div>
  );


}
export default BookShelf;
