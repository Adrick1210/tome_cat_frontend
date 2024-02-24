import { redirect } from "react-router-dom";

const URL = process.env.REACT_APP_URL;

//create a book
export const createAction = async ({ request }) => {
    const formData = await request.formData();

    const createdBook = {
        title: formData.get("title"),
        author: formData.get("author"),
        read: formData.get("read") //=== "on" ? true : false
    };
    console.log(createdBook)
    await fetch(`${URL}/books`, {
        method: "post",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(createdBook),
    });
    return redirect("/");
};

//update a book
export const updateAction = async ({ request, params }) => {
    const formData = await request.formData();

    const updatedBook = {
        title: formData.get("title"),
        author: formData.get("author"),
        read: formData.get("read") //=== "on" ? true : false
    };

    await fetch(`${URL}/books/${params.id}`, {
        method: "put",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify(updatedBook),
    });
    return redirect("/");
}

//delete a book
export const deleteAction = async ({ params }) => {
    await fetch(`${URL}/books/${ params.id }`,{
        //method to delete
        method: "delete",
    })
    return redirect('/')
}