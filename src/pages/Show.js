import { useLoaderData, Form } from "react-router-dom";

function Show() {
  const book = useLoaderData();

  return (
    <div className="container">
      <Form>
        <input type="text" name="title" placeholder="New Title" />
        <input type="text" name="author" placeholder="Author Name" />
        <input type="checkbox" name="read" />
        <input type="submit" value={"Update Book"} />
      </Form>

      <div className="book-card">
        <h1>{book.title}</h1>
        <h2>{book.author}</h2>
        <h3>{JSON.stringify(book.read)}</h3>
      </div>
    </div>
  );
}

export default Show;
