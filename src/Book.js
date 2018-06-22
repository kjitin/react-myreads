import React from 'react';
import BookShelfChanger from './BookShelfChanger';

const Book = (props) => {

  const {book, book: {title, authors, imageLinks},shelf, onMove } = props;
  let imgThumbNail = () => {

    if(imageLinks){
      return imageLinks.thumbnail;
    }
  }
   return (
           <li>
            <div className="book">
                <div className="book-top">
                   <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${imgThumbNail()})` }}></div>
                    <BookShelfChanger
                     book={book}
                     onMove={onMove}
                     shelf={shelf} />
                </div>
                <div className="book-title">{title}</div>
                <div className="book-authors">{authors? authors.join(', '):''}</div>
             </div>
            </li>
  );
}
export default Book;
