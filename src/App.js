import React from 'react'
 import * as BooksAPI from './BooksAPI'
import './App.css'
import BookList from './BookList';
import Search from './Search';
import {Route, Link} from 'react-router-dom';

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    bookList : []
  }

moveBook = (book,shelf) => {
  BooksAPI.update(book,shelf)
   .then(() => {
    book.shelf = shelf;
     this.setState((prevState) => ({
      bookList: prevState.bookList.filter( b=> b.id !== book.id).concat([book])
     }
   ))
  })
}

componentDidMount(){
BooksAPI.getAll()
  .then((bookList) => {
   this.setState(() => ({
    bookList
   }));

 })
}

  render() {

    const { bookList } = this.state;
    return (
      <div className="app">
      	 <Route exact path='/' render={ () => (
          <div className="list-books">
             <BookList books={bookList} onMove={this.moveBook}/>
            <div className="open-search">
               <Link to='/search'>Add a book</Link>
            </div>
          </div>
        )} />
       <Route path='/search' render={() => (
        <Search books={bookList} onMove={this.moveBook} /> )} />
      </div>
    )
  }
}

export default BooksApp
