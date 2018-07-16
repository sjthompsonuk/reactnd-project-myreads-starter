import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import * as BooksAPI from "./BooksAPI"
import './App.css'
import Search from './Search'
import AllShelves from './AllShelves'

class App extends Component {

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
          <AllShelves books={this.state.books} updateBooks={this.updateBooks}/>
        )}/>
        <Route path='/search' render={() => (
          <Search books={this.state.books} updateBooks={this.updateBooks}/>
        )}/>
      </div>
    )
  }

}

export default App
