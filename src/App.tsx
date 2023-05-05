import './App.css'

import { useContext, useEffect } from 'react'
import { BookCreate } from './components/BookCreate'
import { BookList } from './components/BookList'
import { BooksContext } from './context/Books'

export type Book = {
    id: string
    title: string
}

function App() {
    const { onFetchBooks: fetchBooks } = useContext(BooksContext)

    useEffect(() => {
        fetchBooks()
    }, [])

    return (
        <>
            <BookList/>
            <BookCreate/>
        </>
    )
}

export default App
