import React,{Component} from 'react'
import { Route } from 'react-router-dom'
import { Link } from "react-router-dom"

class BookSearch extends Component{

  render() {

    return(
        <div className="search-books">
          <div className="search-books-bar">
              <Link to="/" className="close-search">Close</Link>
            <div className="search-books-input-wrapper">
              {/*
                NOTES: Need to refer to SearchTerms.md
              */}
              <input type="text" placeholder="Search by title or author"/>

            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid"></ol>
          </div>
        </div>)
    }
}
export default BookSearch
