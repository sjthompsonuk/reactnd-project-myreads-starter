import React, { Component } from 'react';

//Basic Book Component - trying to get actual books from API
class Book extends React.Component {

  render() {
    return (
        <li>
          <div className="book">
            <div className="book-top">
              <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url(${this.props.book.imageLinks.thumbnail})' }}></div>
              {/*TODO Need to arrange the category selector*/}
              <div className="book-shelf-changer">
                <select>
                  <option value="move" disabled>Move to...</option>
                  <option value="currentlyReading">Currently Reading</option>
                  <option value="wantToRead">Want to Read</option>
                  <option value="read">Read</option>
                  <option value="none">None</option>
                </select>
              </div>
            </div>
            <div className="book-title">{this.props.book.title}</div>
            <div className="book-authors">{this.props.book.authors}</div>
          </div>
        </li>
    )
  }
}

export default Book
