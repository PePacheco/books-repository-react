import './App.css'

import { useState } from 'react'
import { BookCreate } from './components/BookCreate'
import { BookList } from './components/BookList'

export type Book = {
    id: string
    title: string
}

function App() {
    const [books, setBooks] = useState<Book[]>([])

    const handleCreateBook = (book: Book) => {
        setBooks(previosBooks => [...previosBooks, book])
    }

    const handleDeleteBook = (id: string) => {
        const newBooks = books.filter(book => book.id !== id)
        setBooks(newBooks)
    }

    const handleEditBook = (id: string, title: string) => {
        const updatedBooks: Book[] = books.map(book => {
            if (book.id === id) {
                return { ...book, title }
            }
            return book
        })
        setBooks(updatedBooks)
    }

    return (
        <>
            <BookList books={books} onDelete={handleDeleteBook} onEdit={handleEditBook} />
            <BookCreate onCreate={handleCreateBook} />
        </>
    )
}

export default App
