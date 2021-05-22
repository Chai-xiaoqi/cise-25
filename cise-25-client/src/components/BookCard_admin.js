import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const BookCardadmin = (props) => {
    const  book  = props.book;

    return(
        
          
          <tr>
            <td><Link to={`/show-book_admin/${book._id}`}>
                        { book.title }
                    </Link></td>
            <td>{ book.author }</td>
            <td>{ book.SEpractice}</td>
            <td>{ book.claim}</td>
            <td>{ book.published_year }</td>
            <td>{ book.published_month }</td>
            <td>{ book.journal}</td>
            
            
            
          </tr>
          
     
    )
};

export default BookCardadmin;