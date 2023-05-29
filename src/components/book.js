
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import BookDetail from "./bookDetail";


function Book(props) {




  return (
    <div>
      <Col>
        <Card style={{ width: "18rem" }}>
          <Card.Body className="mb-3">
            <img className="card-img-top" src={props.image} alt="Card image cap" />
            <Card.Title>
              {props.name}
            </Card.Title>
            <Card.Text>ISBN: {props.isbn}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <BookDetail />
    </div>
  );
}

export default Book;
