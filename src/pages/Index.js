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
      <div className="create-modal">
        <button onClick={handleOpenModal}>Add Book</button>
        {isModalOpen && (
          <Modal>
            <h2>Create a Book</h2>
            <Form action="/create" method="post">
              <input type="text" name="title" placeholder="New Title" />
              <input type="text" name="author" placeholder="Author Name" />
              <input type="checkbox" name="read" />
              <input type="submit" value={"Create Book"} />
              
            </Form>
            {console.log()}
            <button onClick={handleCloseModal}>Close Form</button>
          </Modal>
        )}
      </div>

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
