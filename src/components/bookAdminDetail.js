import React, { useState } from 'react';
import { FormattedMessage } from "react-intl";

function BookAdminDetail(props) {  

    const [name, setName] = useState(props.book.name);
    const [isbn, setIsbn] = useState(props.book.isbn);
    const [author, setAuthor] = useState(props.book.author);
    const [publisher, setPublisher] = useState(props.book.publisher);
    const [genre, setGenre] = useState(props.book.genre);
    const [year, setYear] = useState(props.book.year);
    const [price, setPrice] = useState(props.book.price);
    const [availableOnline, setAvailableOnline] = useState(props.book.available_online);
    const [summary, setSummary] = useState(props.book.summary);

      return (
          <div className="card">
          <h5 className="card-header"> <FormattedMessage id="name" />: {props.book.name}
          <input type="text" class="form-control" placeholder={props.book.isbn} onChange={ (event) => {setIsbn(event.target.value);}}/> 
          </h5>
           <div class="card-body">
            <p className="card-text"><b> <FormattedMessage id="isbn" />:</b> 
            <input type="text" class="form-control" placeholder={props.book.isbn} onChange={ (event) => {setIsbn(event.target.value);}}/> </p>
            <p className="card-text"><b> <FormattedMessage id="author" />:</b>
            <input type="text" class="form-control" placeholder={props.book.author} onChange={ (event) => {setIsbn(event.target.value);}}/> </p>
            <p className="card-text"><b> <FormattedMessage id="publisher" />:</b>
            <input type="text" class="form-control" placeholder={props.book.publisher} onChange={ (event) => {setIsbn(event.target.value);}}/> </p>
            <p className="card-text"><b><FormattedMessage id="genre" />:</b>
            <input type="text" class="form-control" placeholder={props.book.genre} onChange={ (event) => {setIsbn(event.target.value);}}/> </p>
            <p className="card-text"><b><FormattedMessage id="year" />:</b> 
            <input type="text" class="form-control" placeholder={props.book.year} onChange={ (event) => {setIsbn(event.target.value);}}/> </p>
            <p className="card-text"><b><FormattedMessage id="price" />:</b>
            <input type="text" class="form-control" placeholder={props.book.price} onChange={ (event) => {setIsbn(event.target.value);}}/> </p>
            <p className="card-text"><b><FormattedMessage id="available_online" />:</b> 
            <input type="text" class="form-control" placeholder={props.book.available_online ? "Yes" : "No"} onChange={ (event) => {setIsbn(event.target.value);}}/> </p>
            <p className="card-text"><b><FormattedMessage id="summary" />:</b> 
            <input type="text" class="form-control" placeholder={props.book.summary} onChange={ (event) => {setIsbn(event.target.value);}}/> </p> 
           </div>
          </div>
      )

  }
  
  export default BookAdminDetail;
  