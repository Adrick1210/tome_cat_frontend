import { useLoaderData, Link, Form } from "react-router-dom";
import { useState } from "react";
import Modal from "../components/Modal";

function Index() {
  const books = useLoaderData();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  //variables for read and unread books
  const readBooks = books.filter((book) => book.read === true);
  const unreadBooks = books.filter((book) => book.read === false);

  return (
    <div className="index-container">
      <button type="button" class="index-button" onClick={handleOpenModal}>
        <span class="button__text">Add Book</span>
        <span class="button__icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke-linejoin="round"
            stroke-linecap="round"
            stroke="currentColor"
            height="24"
            fill="none"
            class="svg"
          >
            <line y2="19" y1="5" x2="12" x1="12"></line>
            <line y2="12" y1="12" x2="19" x1="5"></line>
          </svg>
        </span>
      </button>

      {isModalOpen && (
        <Modal>
          <div className="form">
            <Form action="/create" method="post">
              <h2>Create a Book</h2>
              <input type="text" name="title" placeholder="New Title" />
              <input type="text" name="author" placeholder="Author Name" />
              <input type="checkbox" name="read" />
              <div className="buttons">
                <input type="submit" value={"Create"} />
                <button onClick={handleCloseModal}>Close</button>
              </div>
            </Form>
          </div>
        </Modal>
      )}

      {/* Books that have been read */}
      <div className="list-container">
        <h2>Books You've Read:</h2>
        {readBooks.map((book) => (
          <div className="list-item" key={book._id}>
            <Link to={book._id}>
              <h1>{book.title}</h1>
            </Link>
          </div>
        ))}
      </div>

      {/* Books that haven't been read */}
      <div className="list-container">
        <h2>Books You Haven't Read:</h2>
        {unreadBooks.map((book) => (
          <div className="list-item" key={book._id}>
            <Link to={book._id}>
              <h1>{book.title}</h1>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Index;
