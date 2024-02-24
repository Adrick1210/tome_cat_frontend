import { useLoaderData, Link, Form } from "react-router-dom";

function Index() {
  const books = useLoaderData();

  return (
    <div>
      <Form>
        <input type="text" name="title" placeholder="New Title" />
        <input type="text" name="author" placeholder="Author Name" />
        <input type="checkbox" name="read" />
        <input type="submit" value={"Create Book"} />
      </Form>

      <div className="list-container">
        {books.map((items) => {
          return (
            <div className="list-item">
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
