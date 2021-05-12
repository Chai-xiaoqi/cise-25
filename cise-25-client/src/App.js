import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import ShowBookList from './components/ShowBookList';
import ShowBookDetails from './components/ShowBookDetails';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' component={ShowBookList} />
          <Route path='/show-book/:id' component={ShowBookDetails} />
        </div>
      </Router>
    );
  }
}

export default App;
