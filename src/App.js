import axios from "axios";
import { useState, useEffect } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

function App() {
    const [books, setBooks] = useState([]);

    const fetchBooks = async () => {
        const response = await axios.get('http://localhost:3001/books');
        setBooks(response.data);
        console.log(books)
    }

    useEffect(() => {
        fetchBooks()
    }, []);

    const createBook = async (title, author, category) => {
        const response = await axios.post('http://localhost:3001/books', {
            title,
            author, 
            category
        });

        const updatedBooks = [
            ...books, 
            response.data
        ];
        setBooks(updatedBooks);
    };

    const deleteBookById = async (id) => {
        const response = await axios.delete(`http://localhost:3001/books/${id}`);
        const updatedBooks = books.filter((book) => {
            return book._id !== id;
        });

        setBooks(updatedBooks);
    };

    const editBookById = async (id, newTitle, newAuthor, newCategory) => {
        // console.log(`${id}, ${newTitle} ${newAuthor} ${newCategory}`);
        const response = await axios.patch(`http://localhost:3001/books/${id}`, {
            title: newTitle,
            author: newAuthor,
            category: newCategory
        });

        console.log(response);

        const updatedBooks = books.map((book) => {
            if (book._id === id) {
                return {
                    ...book, 
                    ...response.data
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