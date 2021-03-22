import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Book from "./Book";
import { Container, Button, Form, Modal, Row } from "react-bootstrap";
const addBookAction = (book) => {
  return { type: "ADD_BOOK", book };
};
const BookList = () => {
  // set modal display state
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  let books = useSelector((state) => state.data.slice(0));
  const [book, setBook] = useState("");
  const dispatch = useDispatch();
  const addBook = () => {
    dispatch(addBookAction(book));
    setBook("");
    setShow(false);
  };
  const bookOnChange = (e) => {
    setBook(e.target.value);
  };
  return (
    <Container className="flex">
      <Row className="justify-content-center mt-4">
        <Button variant="primary" onClick={handleShow}>
          Add A Book
        </Button>
      </Row>

      <div className="mt-4">
        {books.map((book, index) => (
          <Book key={book} book={book} index={index} />
        ))}
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form inline className="justify-content-center mt-4">
            <Form.Control
              type="text"
              onChange={bookOnChange}
              value={book}
              placeholder="Book Name"
            />
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" type="button" onClick={addBook}>
            Save Book
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};
export default BookList;
