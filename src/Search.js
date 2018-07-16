import React,{Component} from 'react'
import {Route} from "react-router-dom"
import {Link} from "react-router-dom"
import escapeRegExp from 'escape-string-regexp';
import * as BooksAPI from "./BooksAPI";
import Book from './Book'

class Search extends Component{
  state = {
    results:[],
    query:'',
  }

  bookSearch = (evt) => {
    const match = new RegExp(escapeRegExp(evt.target.value),'i')
    if(match.test(evt.target.value)) {
      this.setState({query:evt.target.value})

      if (evt.target.value === '') {
          console.log('empty query')
          this.setState({results:[]})
      } else {
          BooksAPI.search(this.state.query).then(queryResults => {

              {/* Ensure a valid set of results has been returned */}
              if (Array.isArray(queryResults)) {

                {/* Change results that match our library to have the relevant category */}
                let resultsCopy = JSON.parse(JSON.stringify(queryResults))
                //Loop through results v books in library
                for (let result in resultsCopy) {
                    for (let book in this.props.books) {
                        if (resultsCopy[result].id === this.props.books[book].id) {
                           //make changes to bookshelf
                           resultsCopy[result].shelf = this.props.books[book].shelf
                        }
                    }
                }
                //Assign to state
                this.setState({results:resultsCopy})
                console.log(this.state.results)
              }
           })
       }

    }
  }

  componentDidMount() {
    this.props.updateBooks()
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
            ))

            }
          </ol>
        </div>
      </div>)
    }
}
export default Search
