import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import BookDetail from "./bookDetail";
import { useState } from "react";
import { Link } from "react-router-dom";

function Book(props) {

    const[bookSelected, setBookSelected]=useState("");
   const handleClick=()=>{

   }

    return (
    <div>
        <Col>
        <Card style={{ width: "18rem" }}>
          <Card.Body className="mb-3">
            <img class="card-img-top" src={props.image} alt="Card image cap"/>
            <Card.Title>
            <Link to={"/books/" + props.books.id} onClick={handleClick()}>{props.name}</Link>
            </Card.Title>
            <Card.Text>{props.isbn}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
        <BookDetail />
    </div>
    
    );
   }
   
export default Book;