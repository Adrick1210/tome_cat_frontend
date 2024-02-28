const URL = process.env.REACT_APP_URL;

export const allBooksLoader = async () => {
    const response = await fetch(`${URL}/books`);
    const books = await response.json();
    return books;
}

export const oneBookLoader = async({params}) => {
    const response = await fetch(`${URL}/books/${params.id}`)
    const book = await response.json();
    return book;
}