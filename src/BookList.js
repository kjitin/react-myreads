import React, {Component} from 'react';
import BookShelf from './BookShelf'
import PropTypes from 'prop-types';

class BookList extends Component{
static propType ={
  books: PropTypes.array.isRequired,
  onMove: PropTypes.func.isRequired,
  }
  render(){

    const {books, onMove} = this.props;
    return(
    <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
    <div className="list-books-content">
      <BookShelf
        name="Currently Reading"
        shelf="currentlyReading"
        books={books}
        onMove={onMove}
       />
      <BookShelf
        name="Want To Read"
        shelf="wantToRead"
        books={books}
        onMove={onMove}
       />
      <BookShelf
        name="Read"
        shelf="read"
        books={books}
        onMove={onMove}
       />
    </div>
    </div>
    );


  }
}
export default BookList;
