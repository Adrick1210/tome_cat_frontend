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
        <h1>{book.title}</h1>
        <h2>{book.author}</h2>
        <h3>{JSON.stringify(book.read)}</h3>
      </div>

      <div className="update-modal">
        <button onClick={handleOpenModal}>Update</button>
        {isModalOpen && (
          <Modal>
            <Form action={`/update/${book._id}`} method="post">
            <h2>Update "{book.title}"</h2>
              <input type="text" name="title" placeholder={book.title} />
              <input type="text" name="author" placeholder={book.author} />
              <input type="checkbox" name="read" />
              <input type="submit" value="book update" />
              <button onClick={handleCloseModal}>Close</button>
            </Form>
          </Modal>
        )}
      </div>

      <div className="delete-button">
        <Form action={`/delete/${book._id}`} method="post">
          <button
            className="delete-button"
            type="submit"
          >{`Delete ${book.title}`}</button>
        </Form>
      </div>
      <div>
        <a href="/">
          <button>
            Back to main page
          </button>
        </a>
      </div>
    </div>
  );
}

export default Show;
