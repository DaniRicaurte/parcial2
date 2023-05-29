
import { FormattedMessage } from "react-intl";

function BookDetail(props) {  
      return (
          <div className="card">
          <h5 className="card-header"> <FormattedMessage id="name" />: {props.book.name}</h5>
          <div class="card-body">
                            <p className="card-text"><b>ISBN:</b> {props.book.isbn}</p>
                            <p className="card-text"><b> <FormattedMessage id="author" />:</b> {props.book.author}</p>
                            <p className="card-text"><b> <FormattedMessage id="publisher" />:</b> {props.book.publisher}</p>
                            <p className="card-text"><b><FormattedMessage id="genre" />:</b> {props.book.gender}</p>
                            <p className="card-text"><b><FormattedMessage id="year" />:</b> {props.book.year}</p>
                            <p className="card-text"><b><FormattedMessage id="price" />:</b> {props.price}</p>
                            <p className="card-text"><b><FormattedMessage id="available_online" />:</b> {props.book.available_online ? "Yes" : "No"}</p>
                            <p className="card-text"><b><FormattedMessage id="summary" />:</b> {props.book.summary}</p> 
                            </div>
          </div>
      )

  }
  
  export default BookDetail;
  