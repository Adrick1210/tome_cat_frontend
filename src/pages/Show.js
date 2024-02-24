import { useLoaderData, Form } from "react-router-dom";

function Show() {
  const book = useLoaderData();

  return (
    <div className="container">

      <div className="book-card">
        <h1>{book.title}</h1>
        <h2>{book.author}</h2>
        <h3>{JSON.stringify(book.read)}</h3>
      </div>

      <Form action={`/update/${book._id}`} method="post">
        <input type="text" name="title" placeholder={book.title} />
        <input type="text" name="author" placeholder={book.author} />
        <input type="checkbox" name="read" />
        <input type="submit" value="book update"/>
      </Form>

      <div className="delete-button">
        <Form action={`/delete/${book._id}`} method="post"> 
          <button className="delete-button" type="submit">{`Delete ${book.title}`}</button>
        </Form>

      </div>
    </div>
  );
}

export default Show;
