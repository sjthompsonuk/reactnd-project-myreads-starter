import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import { Link } from "react-router-dom"
import * as BooksAPI from "./BooksAPI"
import './App.css'
import Bookshelf from './Bookshelf'
import BookSearch from './BookSearch'
import AllShelves from './AllShelves'

class App extends React.Component {

  state = {
    books: []
  }

  updateBooks = () => {
    BooksAPI.getAll().then((books) =>{
      this.setState({books:books})
    })
  }

  componentDidMount() {
    this.updateBooks()
  }

  render() {
    return (
      <div className="app">
          <Route exact path='/' render={() => (
            <AllShelves
              books={this.state.books} updateBooks={this.updateBooks}
            />
          )}/>
          <Route path='/search' render={() => (
            <BookSearch
              updateBooks={this.updateBooks}
            />
          )}/>
      </div>
    )
  }

}

export default App
