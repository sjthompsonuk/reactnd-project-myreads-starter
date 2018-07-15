import React,{Component} from 'react'
import {Route} from "react-router-dom"
import {Link} from "react-router-dom"
import escapeRegExp from 'escape-string-regexp';
import * as BooksAPI from "./BooksAPI";
import Book from './Book'

class Search extends Component{
  state = {
    books:[],
    results:[],
    query:'',
  }

  bookSearch = (evt) => {
    const match = new RegExp(escapeRegExp(evt.target.value),'i')
    if(match.test(evt.target.value)) {
      this.setState({query:evt.target.value})
      BooksAPI.search(evt.target.value).then(queryResults => {
        this.setState({results:queryResults})
      })
    }
  }

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({books})
    })
    this.results = this.state.results
  }
  render() {

    return(
      <div className="search-books">
      <div className="search-books-bar">
          <Link to="/" className="close-search">Close</Link>
        <div className="search-books-input-wrapper">
          {/*
            NOTES: Need to refer to SearchTerms.md
          */}
          <input type="text" placeholder="Search by title or author" onChange={this.bookSearch}/>

        </div>
      </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {this.state.results.map(result => (
              <Book key={result.id} book={result} updateBooks={this.props.updateBooks} />
            ))}
          </ol>
        </div>
      </div>)
    }
}
export default Search