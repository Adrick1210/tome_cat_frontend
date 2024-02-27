import { useLoaderData, Link, Form } from "react-router-dom";
import { useState } from "react";
import Modal from "../components/Modal";

function Index() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const books = useLoaderData();

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <nav>
        <button onClick={handleOpenModal}>Add Book</button>
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
        <button>Read Me</button>
      </nav>


      <div className="list-container">
        {books.map((items) => {
          return (
            <div className="list-item" key={items._id}>
              <Link to={items._id}>
                <h1>{items.title}</h1>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Index;
