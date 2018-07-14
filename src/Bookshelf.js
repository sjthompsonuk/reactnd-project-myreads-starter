import React, { Component } from 'react';
import Book from './Book'

//Basic Bookshelf Component - random bookshelf for now
class Bookshelf extends React.Component {

  render() {
    return (
        <div className="bookshelf">
          <h2 className="bookshelf-title">Read</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
              {/* Book removed */}
              <Book/>
              {/* Book removed */}
              <Book/>
              {/* Book removed */}
              <Book/>
            </ol>
          </div>
        </div>
    )
  }
}

export default Bookshelf
