import React, {Component} from 'react';
import {Link} from 'react-router-dom';
 import * as BooksAPI from './BooksAPI';
import SearchResult from './SearchResult';
import PropTypes from 'prop-types';

class Search extends Component{

  static propType ={
  books: PropTypes.array.isRequired,
  onMove: PropTypes.func.isRequired,
  }
  state ={
   books:[],
   query: '',
  }

searchBooks= (query,bookList)=> {
  if(query===''){
    this.setState(() => ({query:'', books:[]}));
    return;
  } else {
  this.setState(() => (
    {
      query:query.trim()
    }
  ))

BooksAPI.search(query).then(booksApiResult => {
  booksApiResult.map(book=> (
              bookList.filter((b) => b.id===book.id).map((b) => book.shelf=b.shelf)));
   this.setState(() => ({
    books: booksApiResult
   }))
  })
}
}
  render(){
    const {books,onMove} = this.props;
    return(
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">Close</Link>
            <div className="search-books-input-wrapper">
              <input type="text" placeholder="Search by title or author" onChange={(event) => this.searchBooks(event.target.value,books)}/>
            </div>
        </div>
            <SearchResult
              books={this.state.books}
              onMove={onMove} />
      </div>
    );
  }
}
export default Search;
