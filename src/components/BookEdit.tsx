import { useState } from "react"
import { Book } from "../App"

type BookEditProps = {
    book: Book
    onSubmit: (id: string, title: string) => void
}

export const BookEdit = ({ book, onSubmit }: BookEditProps) => {
    const [title, setTitle] = useState<string>(book.title)

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        onSubmit(book.id, title)
    }

    return (
        <form className="book-edit" onSubmit={handleSubmit} >
            <label htmlFor="title">Title</label>
            <input type="text" name="title" className="input" onChange={e => setTitle(e.target.value)} value={title} />
            <button className="button is-primary" type="submit" >Save</button>
        </form>
    )
}