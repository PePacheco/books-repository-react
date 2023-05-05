import { useState } from "react"
import { Book } from "../App"
import { useBooksContext } from "../hooks/useBooksContext"

type BookEditProps = {
    book: Book
    onSubmit: () => void
}

export const BookEdit = ({ book, onSubmit }: BookEditProps) => {
    const [title, setTitle] = useState<string>(book.title)
    const { onEditBook } = useBooksContext()

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        onSubmit()
        onEditBook(book.id, title)
    }

    return (
        <form className="book-edit" onSubmit={handleSubmit}>
            <label htmlFor="title">Title</label>
            <input type="text" name="title" className="input" onChange={e => setTitle(e.target.value)} value={title} />
            <button className="button is-primary" type="submit" >Save</button>
        </form>
    )
}