import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import ArticleCard from './ArticleCard';

class ShowArticleList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: []
    };
  }

  componentDidMount() {
    axios
      .get('https://cise25.herokuapp.com/api/articles')
      .then(res => {
        this.setState({
          books: res.data
        })
      })
      .catch(err =>{
        console.log('Error from ShowArticleList');
      })
  };


  render() {
    const books = this.state.articles;
    console.log("PrintArticle: " + articles);
    let articleList;

    if(!articles) {
      articleList = "there is no such article!";
    } else {
      articleList = articles.map((article, k) =>
        <ArticleCard article={article} key={k} />
      );
    }

    return (
      <div className="ShowArticleList">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <br />
              <h2 className="display-4 text-center">Articles List</h2>
            </div>

          </div>

          <div className="list">
                {articleList}
          </div>
        </div>
      </div>
    );
  }
}

export default ShowArticleList;