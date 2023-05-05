import { useState } from "react"
import { BookEdit } from "./BookEdit"
import { Book } from "../App"
import { useBooksContext } from "../hooks/useBooksContext"

type BookShowProps = {
    book: Book
}

export const BookShow = ({ book }: BookShowProps) => {
    const [showEdit, setShowEdit] = useState<boolean>(false)
    const { onDeleteBook } = useBooksContext()

    const handleSubmit = () => {
        setShowEdit(!showEdit)
    }

    let content = <h3>{ book.title }</h3>
    if (showEdit) {
        content = <BookEdit book={book} onSubmit={handleSubmit} />
    }

    return (
        <div className="book-show">
            <img src={`https://picsum.photos/seed/${book.id}/300/200`} alt="books" />
            { content }
            <div className="actions">
                <button className="edit" onClick={handleSubmit} >Edit</button>
                <button className="delete"  onClick={() => onDeleteBook(book.id)}>Delete</button>
            </div>
        </div>
    )
}