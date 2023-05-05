import { useContext } from "react"
import { BookShow } from "./BookShow"
import { BooksContext } from "../context/Books"

export const BookList = () => {
    const { books } = useContext(BooksContext)

    return (
        <div className="book-list">
            { books.map(book => <BookShow key={book.id} book={book}/>) }
        </div>
    )
}