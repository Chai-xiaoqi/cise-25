import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div class="container">
            <h1>Database claims</h1>
            <div id="searchWrapper">
                <input
                    type="text"
                    name="searchBar"
                    id="searchBar"
                    placeholder="search for a claim"
                />
            </div>
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
          <div id = "searchbarbox">
          <input type="text" id="searchbar" name="searchbar" placeholder="Search for claims here"></input>
          <p></p>
          <label>Filter options: </label>
          <select name="claimFilter" id="claimFilter">
          <option value="Date">Volvo</option>
          <option value="Rated">Saab</option>
          </select>
          </div>
        </a>
      </header>
    </div>
  );
}

export default App;
