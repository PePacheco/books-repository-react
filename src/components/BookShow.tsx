import { useState } from "react"
import { Book } from "../App"
import { BookEdit } from "./BookEdit"

type BookShowProps = {
    book: Book
    onDelete: (id: string) => void
    onEdit: (id: string, title: string) => void
}

export const BookShow = ({ book, onDelete, onEdit }: BookShowProps) => {
    const [showEdit, setShowEdit] = useState<boolean>(false)

    const handleEdit = () => {
        setShowEdit(!showEdit)
    }

    const handleSubmit = (id: string, title: string) => {
        setShowEdit(false)
        onEdit(id, title)
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
                <button className="edit" onClick={handleEdit} >Edit</button>
                <button className="delete"  onClick={() => onDelete(book.id)}>Delete</button>
            </div>
        </div>
    )
}