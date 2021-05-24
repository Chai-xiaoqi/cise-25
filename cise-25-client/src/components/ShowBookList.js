import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import BookCard from './BookCard';

class ShowBookList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:8082/api/books')
      .then(res => {
        this.setState({
          books: res.data
        })
      })
      .catch(err =>{
        console.log('Error from ShowBookList');
      })
  };


  render() {
    const books = this.state.books;
    
    console.log("PrintBook: " + books);
    let bookList;

    if(!books) {
      bookList = "there is no book record!";
    } else {
      bookList = books.map((book, k) => {
        console.log(book);
        return <BookCard book={book} key={k} />;
      }
      );
    }

    return (
      <div className="ShowBookList">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <br />
              <h2 className="display-4 text-center">Articles List</h2>
            </div>

            <div className="col-md-11">
              <Link to="/create-book" className="btn btn-outline-warning float-right">
                + Submit Article 
              </Link>
              <br />
              
              <br />
              <br />
              <hr />
            </div>

          </div>

          <div className="list">
          <input type="text" id="myInput" placeholder="Search for names.." title="Type in a name"></input>

            <table border="1" id="myTable" className="sortable" style={{ marginTop: 20 }}> 
              <thead>
          
          <tr>
            <th scope="col">TITLE</th>
            <th scope="col">AUTHOR</th>
            <th scope="col">SE PRACTICE</th>
            <th scope="col">CLAIM</th>
            <th scope="col">PUBLISHED YEAR</th>
          </tr>
          </thead>
          <tbody>
          
                {bookList}
            
          </tbody>
          </table>
          </div>
        </div>
      </div>
    );
  }
}

export default ShowBookList;