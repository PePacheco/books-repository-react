import { Book } from "../App"
import { BookShow } from "./BookShow"

type BookListProps = {
    books: Book[]
    onDelete: (id: string) => void
    onEdit: (id: string, title: string) => void
}

export const BookList = ({ books, onDelete, onEdit }: BookListProps) => {
    return (
        <div className="book-list">
            { books.map(book => <BookShow book={book} onDelete={onDelete} onEdit={onEdit} />) }
        </div>
    )
}