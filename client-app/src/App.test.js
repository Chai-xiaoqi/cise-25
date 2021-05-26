import ShowBookList from './components/ShowBookList_admin';
import { BrowserRouter as Router, Route } from 'react-router-dom';



test('Ensures title component', () => {
  <Router>
  <div>
  <Route path='/show-books_admin' component={ShowBookList} />
  </div>
  </Router>
  var ReactTestUtils = require('react-dom/test-utils'); 
  var component = ReactTestUtils.renderIntoDocument(
    <ShowBookList />);
  var h1 = ReactTestUtils.findRenderedDOMComponentWithTag(
    component, 'h2'
 );
});

test('Ensures table component', () => {
  <Router>
  <div>
  <Route path='/show-books_admin' component={ShowBookList} />
  </div>
  </Router>
  var ReactTestUtils = require('react-dom/test-utils'); 
  var component = ReactTestUtils.renderIntoDocument(
    <ShowBookList />);
  var h1 = ReactTestUtils.findRenderedDOMComponentWithTag(
    component, 'table'
 );
});
