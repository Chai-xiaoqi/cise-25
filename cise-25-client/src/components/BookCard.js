import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const BookCard = (props) => {
    const  book  = props.book;

    return(
        
          
          <tr>
            <td><Link to={`/show-book/${book._id}`}>
                        { book.title }
                    </Link></td>
            <td>{ book.author }</td>
            <td>{ book.SEpractice}</td>
            <td>{ book.claim}</td>
            <td>{ book.published_year }</td>
          </tr>
          
     
    )
};

export default BookCard;