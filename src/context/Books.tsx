import { createContext, useState } from "react";
import { Book } from "../App";

type BooksContextType = {
    books: Book[];
    onFetchBooks: () => void,
    onCreateBook: (book: Book) => void
    onDeleteBook: (id: string) => void,
    onEditBook: (id: string, title: string) => void,
}

type BooksProviderProps = {
    children: React.ReactNode;
}

const initialState: BooksContextType = {
    books: [],
    onFetchBooks: () => {},
    onCreateBook: (book: Book) => {},
    onDeleteBook: (id: string) => {},
    onEditBook: (id: string, title: string) => {},
}

export const BooksContext = createContext<BooksContextType>(initialState);

export const BooksProvider = ({children}: BooksProviderProps) => {
    const [books, setBooks] = useState<Book[]>([]);

    const fetchBooks = async () => {
        const response = await fetch('http://localhost:3001/books')
        const books = await response.json()
        setBooks(books)
    }

    const handleCreateBook = async (book: Book) => {
        const response = await fetch('http://localhost:3001/books', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(book),
        })
        const createdBook = await response.json()

        setBooks(previosBooks => [...previosBooks, createdBook])
    }

    const handleDeleteBook = async (id: string) => {
        const response = await fetch(`http://localhost:3001/books/${id}`, {
            method: 'DELETE'
        })

        if (response.ok) {
            const newBooks = books.filter(book => book.id !== id)
            setBooks(newBooks)
        }
    }

    const handleEditBook = async (id: string, title: string) => {
        const response = await fetch(`http://localhost:3001/books/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title }),
        })

        const updatedBook = await response.json()

        const updatedBooks: Book[] = books.map(book => {
            if (book.id === id) {
                return { ...book, ...updatedBook }
            }
            return book
        })
        setBooks(updatedBooks)
    }

    return (
        <BooksContext.Provider value={{
            books,
            onFetchBooks: fetchBooks,
             onCreateBook: handleCreateBook,
              onDeleteBook: handleDeleteBook,
              onEditBook: handleEditBook
            }} >
            {children}
        </BooksContext.Provider>
    )
}
