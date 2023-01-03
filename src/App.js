import { useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

function App() {
    const [books, setBooks] = useState([]);

    const createBook = (title, author, category) => {
        const updatedBooks = [...books, {
            id: Math.round(Math.random() * 9999), 
            title, 
            author, 
            category
        }];
        setBooks(updatedBooks);
    };

    const deleteBookById = (id) => {
        const updatedBooks = books.filter((book) => {
            return book.id !== id;
        });

        setBooks(updatedBooks);
    };

    const editBookById = (id, newTitle, newAuthor, newCategory) => {
        const updatedBooks = books.map((book) => {
            if (book.id === id) {
                return {
                    ...book, 
                    title: newTitle, 
                    author: newAuthor, 
                    category: newCategory
                }
            }
            return book;
        });

        setBooks(updatedBooks);

    };

    return (
        <div className="app">
            <h1>My Library</h1>
            <BookList books={books} onDelete={deleteBookById} onEdit={editBookById}/>
            <BookCreate onCreate={createBook}/> 
        </div>
    );
}

export default App;