import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';

class showBookDetails_admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      book: {}
    };
  }

  componentDidMount() {
    // console.log("Print id: " + this.props.match.params.id);
    axios
      .get('http://localhost:8082/api/books/'+this.props.match.params.id)
      .then(res => {
        // console.log("Print-showBookDetails-API-response: " + res.data);
        this.setState({
          book: res.data
        })
      })
      .catch(err => {
        console.log("Error from ShowBookDetails");
      })
  };

  onDeleteClick (id) {
    axios
      .delete('http://localhost:8082/api/books/'+id)
      .then(res => {
        this.props.history.push("/");
      })
      .catch(err => {
        console.log("Error form ShowBookDetails_deleteClick");
      })
  };


  render() {

    const book = this.state.book;
    let BookItem = <div>
      <table border='1' className="table table-hover table-dark">
        {/* <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead> */}
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Title</td>
            <td>{ book.title }</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Author</td>
            <td>{ book.author }</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>SEpractice</td>
            <td>{ book.SEpractice }</td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>Claim</td>
            <td>{ book.claim }</td>
          </tr>
          <tr>
            <th scope="row">5</th>
            <td>Support</td>
            <td>{ book.support }</td>
          </tr>
          <tr>
            <th scope="row">6</th>
            <td>Published Year</td>
            <td>{ book.published_year}</td>
          </tr>
          <tr>
            <th scope="row">7</th>
            <td>Published Month</td>
            <td>{ book.published_month}</td>
          </tr>
          <tr>
            <th scope="row">8</th>
            <td>Journal</td>
            <td>{ book.published_month}</td>
          </tr>
        </tbody>
      </table>
    </div>

    return (
      <div className="ShowBookDetails_admin">
        <div className="container">
          <div className="row">
            <div className="col-md-10 m-auto">
              <br /> <br />
              <Link to="/show-books_admin" className="btn btn-outline-warning float-left">
                  Show Article List
              </Link>
            </div>
            <br />
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Article's Record</h1>
              <p className="lead text-center">
                  View Article's Info
              </p>
              <hr /> <br />
            </div>
          </div>
          <div>
            { BookItem }
          </div>
          <br />
          <div className="row">
            <div className="col-md-6">
              <button type="button" className="btn btn-outline-danger btn-lg btn-block" onClick={this.onDeleteClick.bind(this,book._id)}>Delete Book</button><br />
            </div>

            <div className="col-md-6">
              <Link to={`/edit-book/${book._id}`} className="btn btn-outline-info btn-lg btn-block">
                    Edit Book
              </Link>
              <br />
            </div>

          </div>

            {/* <br />
            <button type="button" class="btn btn-outline-info btn-lg btn-block">Edit Book</button>
            <button type="button" class="btn btn-outline-danger btn-lg btn-block">Delete Book</button> */}

        </div>
      </div>
    );
  }
}

export default showBookDetails_admin;