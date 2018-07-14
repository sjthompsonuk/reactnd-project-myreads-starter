import React, { Component } from 'react';
import Book from './Book'

//Basic Bookshelf Component - random bookshelf for now
class Bookshelf extends React.Component {

  render() {
    return (
        <div className="bookshelf">
          <h2 className="bookshelf-title">{this.props.catTitle}</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
              {this.props.books.map(book => (
                book.shelf === this.props.category &&(
                  <Book key={book.id} book={book} updateBooks={this.props.updateBooks}/>
                )))
              }
            </ol>
          </div>
        </div>
    )
  }
}

export default Bookshelf
