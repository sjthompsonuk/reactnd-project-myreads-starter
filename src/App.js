import React, { Component } from 'react';
//Need to add react routing later TODO
import * as BooksAPI from "./BooksAPI"
import './App.css'
import Bookshelf from './Bookshelf'

class App extends React.Component {

  state = {
    books:[]
  }

  updateBooks = () => {
    BooksAPI.getAll().then((books) =>{
      this.setState({books})
    })
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) =>{
      this.setState({books:books})
    })
  }

  render() {
    return (
      <div className="app">

      {/*TODO sort this out with router*/}

        {this.state.showSearchPage ? (
          <div className="search-books">
            <div className="search-books-bar">
              <a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a>
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
          </div>
        ) :

        (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                {/*Shelf removed*/}
                <Bookshelf/>
                {/*Shelf removed*/}
                <Bookshelf/>
                {/*Shelf removed*/}
                <Bookshelf/>
              </div>
            </div>

            {/*TODO Need to modify this to use router rather than state*/}
            <div className="open-search">
              <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default App
