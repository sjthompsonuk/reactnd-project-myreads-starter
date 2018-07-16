import React,{Component} from 'react'
import Bookshelf from "./Bookshelf"
import { Link } from "react-router-dom"

class AllShelves extends Component{

  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <Bookshelf books={this.props.books} category="currentlyReading" catTitle="Currently Reading" updateBooks={this.props.updateBooks}/>
            <Bookshelf books={this.props.books} category="wantToRead" catTitle="Want to Read" updateBooks={this.props.updateBooks}/>
            <Bookshelf books={this.props.books} category="read" catTitle="Read" updateBooks={this.props.updateBooks}/>
          </div>
        </div>

        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    )
  }
}

export default AllShelves
