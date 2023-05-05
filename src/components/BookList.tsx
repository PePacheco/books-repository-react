import { BookShow } from "./BookShow"
import { useBooksContext } from "../hooks/useBooksContext"

export const BookList = () => {
    const { books } = useBooksContext()

    return (
        <div className="book-list">
            { books.map(book => <BookShow key={book.id} book={book}/>) }
        </div>
    )
}