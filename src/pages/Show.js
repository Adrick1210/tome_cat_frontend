
import { useLoaderData, Form } from "react-router-dom";
import { useState } from "react";
import Modal from "../components/Modal";

function Show() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const book = useLoaderData();

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="container">
      <div className="book-card">
        <div className="card-content">
        <h1 className="card-title">{book.title}</h1>
        <h2>{book.author}</h2>
        <h3>{JSON.stringify(book.read ? "Have Read" : "Need to read")}</h3>
      
      <div className="book-card-button">
      <button onClick={handleOpenModal}>Update</button>
      {isModalOpen && (
        <Modal>
          <div className="form">
            <Form action={`/update/${book._id}`} method="post">
              <h3>Update "{book.title}"</h3>
              <input type="text" name="title" value={book.title} />
              <input type="text" name="author" value={book.author} />
              <input type="checkbox" name="read" />
              <div className="buttons">
              <input type="submit" value="Update" />
              <button onClick={handleCloseModal}>Close</button>
              </div>
            </Form>
          </div>
        </Modal>
      )}

      <div className="delete-button">
        <Form action={`/delete/${book._id}`} method="post">
          <button
            className="delete-button"
            type="submit"
          >{`Delete ${book.title}`}</button>
        </Form>
        </div>

      </div>
      </div>
      </div>

      <div className="back-button">
        <a href="/">
          <button>Back to main page</button>
        </a>
      </div>
      
    </div>
  );
}

export default Show;
