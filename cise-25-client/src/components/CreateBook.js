import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';


class CreateBook extends Component {
  constructor() {
    super();

    this.state = {
      
      user: '',
      title: '',
      author: '',
      SEpractice: '',
      claim:'', 
      support: '',
      journal: '',
      volume: '',
      number: '',
      pages: '',
      eprint: '',
      peprinttype: '',
      eprintclass: '',
      annote: '',
      published_year: '',
      published_month: ''
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const data = {
      
      user: this.state.user,
      title: this.state.title,
      author: this.state.author,
      SEpractice: this.state.SEpractice,
      claim:this.state.claim, 
      support: this.state.support,
      journal: this.state.journal,
      volume: this.state.volume,
      number: this.state.number,
      pages: this.state.pages,
      eprint: this.state.eprint,
      epeprinttype: this.state.eprinttype,
      eprintclass: this.state.eprintclass,
      annote: this.state.annote,
      published_year: this.state.published_year,
      published_month: this.state.published_month,
    };

    axios
      .post('http://localhost:8082/api/books', data)
      .then(res => {
        this.setState({
          
          user: '',
          title: '',
          author: '',
          SEpractice: '',
          claim:'', 
          support: '',
          journal: '',
          volume: '',
          number: '',
          pages: '',
          eprint: '',
          peprinttype: '',
          eprintclass: '',
          annote: '',
          published_year: '',
          published_month: ''
        })
        this.props.history.push('/');
      })
      .catch(err => {
        console.log("Error in CreateBook!");
      })
  };

  render() {
    return (
      <div className="CreateBook">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <br />
              <Link to="/" className="btn btn-outline-warning float-left">
                  Show Article List
              </Link>
            </div>
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Add Article</h1>
              <p className="lead text-center">
                  Create new article
              </p>

              <form noValidate onSubmit={this.onSubmit}>
              <div className='form-group'>
                  <input
                    type='text'
                    placeholder='user of the Ariticle'
                    name='user'
                    className='form-control'
                    value={this.state.user}
                    onChange={this.onChange}
                  />
                </div>
                <br />
                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Title of the Ariticle'
                    name='title'
                    className='form-control'
                    value={this.state.title}
                    onChange={this.onChange}
                  />
                </div>
                <br />

                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Author'
                    name='author'
                    className='form-control'
                    value={this.state.author}
                    onChange={this.onChange}
                  />
                </div>

                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='SEpractice of the book'
                    name='SEpractice'
                    className='form-control'
                    value={this.state.SEpractice}
                    onChange={this.onChange}
                  />
                </div>

                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='claim of this Book'
                    name='claim'
                    className='form-control'
                    value={this.state.claim}
                    onChange={this.onChange}
                  />
                </div>
                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='support of this Book'
                    name='support'
                    className='form-control'
                    value={this.state.support}
                    onChange={this.onChange}
                  />
                </div>
                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='journal of this Book'
                    name='journal'
                    className='form-control'
                    value={this.state.journal}
                    onChange={this.onChange}
                  />
                </div>
                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='volume of this Book'
                    name='volume'
                    className='form-control'
                    value={this.state.volume}
                    onChange={this.onChange}
                  />
                </div>
                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='number'
                    name='number'
                    className='form-control'
                    value={this.state.number}
                    onChange={this.onChange}
                  />
                </div>
                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='pages'
                    name='pages'
                    className='form-control'
                    value={this.state.pages}
                    onChange={this.onChange}
                  />
                </div>
                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='eprint of this Book'
                    name='eprint'
                    className='form-control'
                    value={this.state.eprint}
                    onChange={this.onChange}
                  />
                </div>
                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='eprinttype of this Book'
                    name='eprinttype'
                    className='form-control'
                    value={this.state.eprinttype}
                    onChange={this.onChange}
                  />
                </div>
                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='eprintclass of this Book'
                    name='eprintclass'
                    className='form-control'
                    value={this.state.eprintclass}
                    onChange={this.onChange}
                  />
                </div>
                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='annote of this Book'
                    name='annote'
                    className='form-control'
                    value={this.state.annote}
                    onChange={this.onChange}
                  />
                </div>
                <div className='form-group'>
                  <input
                    type='string'
                    placeholder='published_year'
                    name='published_year'
                    className='form-control'
                    value={this.state.published_year}
                    onChange={this.onChange}
                  />
                </div>
                <div className='form-group'>
                  <input
                    type='string'
                    placeholder='published_month'
                    name='published_month'
                    className='form-control'
                    value={this.state.published_month}
                    onChange={this.onChange}
                  />
                </div>


                <input
                    type="submit"
                    className="btn btn-outline-warning btn-block mt-4"
                />
              </form>
          </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateBook;