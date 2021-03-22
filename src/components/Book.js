import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Form, Modal, Row } from "react-bootstrap";
const removeBookAction = (books) => {
  return { type: "REMOVE_BOOK", books };
};
const Book = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [book, setBook] = useState(props.book);
  let books = useSelector((state) => state.data);
  const dispatch = useDispatch();
  const bookOnChange = (e) => {
    setBook(e.target.value);
  };
  const removeBook = () => {
    books.splice(props.index, 1);
    dispatch(removeBookAction(books));
  };
  return (
    <>
      <Row className="justify-content-center mt-3">
        <span>{book}</span>

        <Button
          variant="warning"
          onClick={handleShow}
          className="ml-2"
          size="sm"
        >
          Update
        </Button>
        <Button
          variant="danger"
          onClick={removeBook}
          className="ml-2"
          size="sm"
        >
          Remove
        </Button>
      </Row>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Set A New Name</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form inline className="justify-content-center mt-4">
            <Form.Control
              type="text"
              onChange={bookOnChange}
              value={book}
              placeholder={props.book}
            />
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Save and Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default Book;
