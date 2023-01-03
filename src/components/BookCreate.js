import { useState } from "react";

function BookCreate( { onCreate }) {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [category, setCategory] = useState('');

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleAuthorChange = (event) => {
        setAuthor(event.target.value);
    };

    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onCreate(title, author, category);
        setTitle('');
        setAuthor('');
        setCategory('');
    }

    return (
        <div className="book-create">
            <h3>Add a Book</h3>
            <form onSubmit={handleSubmit}>
                <label>Title</label>
                <input className="input" value={title} onChange={handleTitleChange}/>
                <input className="input" value={author} onChange={handleAuthorChange}/>
                <input className="input" value={category} onChange={handleCategoryChange}/>
                <button className="button">Create!</button>
            </form>
        </div>
    );
} 

export default BookCreate;