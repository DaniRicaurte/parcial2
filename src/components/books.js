import Book from "./book";
import BookDetail from "./bookDetail";
import BookAdminDetail from "./bookAdminDetail";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Books() {
  const [books, setBooks] = useState([]);
  const [book, setBook] = useState();
  const [rol, setRol] = useState(false);
  const [id, setId] = useState();

  useEffect(() => {
    fetch("https://parcial2-be-ec3d.vercel.app/books/" + { id }, {})
      .then((response) => response.json())
      .then((data) => {
        setBook(data);
      })
      .catch((error) => console.log(error));
  }, [id]);

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (token === "Administrador") {
      setRol(true);
    }
  }, []);

  useEffect(() => {
    const requestOptions = {
      method: "GET",
    };
    fetch("https://parcial2-be-ec3d.vercel.app/books", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        setBooks(data);
        console.log(data);
      });
  }, []);

  return (
    <div className="container">
      <div class="row">
        <div class="col">
          {books.length > 0 &&
            books.map((book) => (
              <Row xs={1} md={2} className="g-4">
                {Array.from({ length: 4 }).map((_, idx) => (
                  <Col key={book.id} onClick={setId(book.id)}>
                    <Book book={book} />
                    <Link to={`/books/${book.id}`} className="btn"> Detail </Link>
                  </Col>
                ))}
              </Row>
            ))}
        </div>
        <div class="col">
          {rol === true ? (
            <BookAdminDetail book={book} />
          ) : (
            <BookDetail book={book} />
          )}
        </div>
      </div>
    </div>
  );
}

export default Books;
