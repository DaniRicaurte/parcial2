import Book from "./book";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";



function Books() {
  const [books, setBooks] = useState([]);
  const { useEffect, useState } = require("react");

  useEffect(() => {
    const requestOptions = {
        method: 'GET',
        };
        fetch('http://localhost:3000/books', requestOptions)
        .then(response => response.json())
        .then(data => {
            setBooks(data);
        });
  }, []);

    return (
        <div className="container">
        <h1></h1>
        <hr></hr>
        <Row>
            {books.map((book) => (
            <Col key={book.id}>
                <Book book={book}  />
            </Col>
            ))}
        </Row>
        </div>
    );
}

export default Books;
