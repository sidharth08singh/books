import { useState } from "react";
import BookEdit from "./BookEdit";

function BookShow( { book, onDelete, onEdit }) {
    const [showEdit, setShowEdit] = useState(false);

    const handleEditClick = () => {
        setShowEdit(!showEdit);
    }

    const handleDeleteClick = () => {
        onDelete(book.id);
    };

    const handleSubmit = (id, newTitle, newAuthor, newCategory) => {
        setShowEdit(false);
        onEdit(id , newTitle, newAuthor, newCategory);
    }

    let content = (
        <div>
            <h3>{book.title}</h3>
            <h4>{book.author}</h4>
            <h5>{book.category}</h5>
        </div>);
    if (showEdit) {
        content = <BookEdit onSubmit={handleSubmit} book={book}/>;
    }

    return (
        <div>
            <div className="book-show">
                <img
                    alt="books"
                    src={`https://picsum.photos/seed/${book.id}/300/200`}
                />
                <div>{content}</div>
                <div className="actions">
                    <button className="edit" onClick={handleEditClick}>
                        Edit
                    </button> 
                    <button className="delete" onClick={handleDeleteClick}>
                        Delete
                    </button>  
                </div>
            </div>
        </div>
       
    );
}

export default BookShow;