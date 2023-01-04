import { useState } from "react";

function BookEdit({ book, onSubmit }) {
    const [title, setTitle] = useState(book.title);
    const [author, setAuthor] = useState(book.author);
    const [category, setCategory] = useState(book.category);

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    }

    const handleAuthorChange = (event) => {
        setAuthor(event.target.value);
    }

    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(book._id, title, author, category);
    }

    return (
        <form onSubmit={handleSubmit} className="book-edit">
            <label>Title</label>
            <input className="input" value={title} onChange={handleTitleChange}/>
            <label>Author</label>
            <input className="input" value={author} onChange={handleAuthorChange}/>
            <label>Category</label>
            <input className="input" value={category} onChange={handleCategoryChange}/>
            <button className="button is-primary">
                Save
            </button>
        </form>
    );
}

export default BookEdit;