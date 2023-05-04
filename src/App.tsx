import './App.css'

import { useEffect, useState } from 'react'
import { BookCreate } from './components/BookCreate'
import { BookList } from './components/BookList'

export type Book = {
    id: string
    title: string
}

function App() {
    const [books, setBooks] = useState<Book[]>([])

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
            if (updatedBook.id === id) {
                return { ...book, ...updatedBook }
            }
            return book
        })
        setBooks(updatedBooks)
    }

    useEffect(() => {
        fetchBooks()
    }, [])

    return (
        <>
            <BookList books={books} onDelete={handleDeleteBook} onEdit={handleEditBook} />
            <BookCreate onCreate={handleCreateBook} />
        </>
    )
}

export default App
