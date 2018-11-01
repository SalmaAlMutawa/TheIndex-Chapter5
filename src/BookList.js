import React, { Component } from "react";

// Components
import SearchBar from "./SearchBar";
import BookTable from "./BookTable";

class BookList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filteredBooks: this.props.books,
      filteredByColor: this.props.books
    };

    this.filterBooks = this.filterBooks.bind(this);
    this.filterByColor = this.filterByColor.bind(this);
  }

  filterBooks(query) {
    query = query.toLowerCase();
    let filteredBooks = this.props.books.filter(book => {
      return `${book.title}`.toLowerCase().includes(query);
    });
    this.setState({ filteredBooks });
  }

  filterByColor(color) {
    return this.state.filteredBooks.filter(book => {
      return `${book.color}` === color;
    });
  }

  render() {
    let books = this.state.filteredBooks;
    if (this.props.match.params.color) {
      books = this.filterByColor(this.props.match.params.color);
    }

    return (
      <div className="authors">
        <h3>Books</h3>
        <SearchBar changeHandler={this.filterBooks} />
        <div className="row">
          <BookTable books={books} />
        </div>
      </div>
    );
  }
}

export default BookList;
