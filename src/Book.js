import React, { Component } from 'react';
import * as BooksAPI from "./BooksAPI"

//Basic Book Component - trying to get actual books from API
class Book extends Component {

  state = {
    category: 'none'
  }

  componentDidMount(){
    this.setState({category:this.props.book.shelf})
  }

  render() {
    return (
    <li>
      <div className="book">
        <div className="book-top">
          {/*Make sure no cover pictures display blank rather than create errors*/}
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${this.props.book.imageLinks ? this.props.book.imageLinks.thumbnail : ''}")` }}>
          </div>
          <div className="book-shelf-changer">
            {/*Update category for shelving*/}
            <select value={this.state.category} onChange={(evt)=> {
              console.log('change')
              BooksAPI.update(this.props.book, evt.target.value).then((resp) =>
                this.props.updateBooks()
              )
              this.setState({category:evt.target.value})
            }}>
              <option value="move" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{this.props.book.title}</div>
        {/*Doesn't seem to need adjustment, books with no authors display OK*/}
        <div className="book-authors">{this.props.book.authors}</div>
      </div>
    </li>
    )
  }
}

export default Book
