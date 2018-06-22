import React from 'react';
import Book from './Book';

const SearchResult = (props) => {
  const {books, onMove} = props;
  return(
         <div className="search-books-results">
              <ol className="books-grid">
               {books.map( book => {
                 return (
                 <Book
                  key={book.id}
                  onMove={onMove}
                  shelf={book.shelf?book.shelf:'none'}
                  book={book} />
                 )}
                )}
              </ol>
            </div>

  );
}
export default SearchResult;
