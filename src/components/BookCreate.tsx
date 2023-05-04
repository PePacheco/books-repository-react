import { useState } from "react"
import { Book } from "../App"

type BookCreateProps = {
    onCreate: (book: Book) => void
}

export const BookCreate = ({ onCreate }: BookCreateProps) => {
    const [title, setTitle] = useState('')

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value)
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        setTitle('')
        onCreate({ id: crypto.randomUUID(), title })
    }

    return (
        <div className="book-create">
            <h3>Add a Book</h3>
            <form onSubmit={handleSubmit} >
                <label htmlFor="title">Title</label>
                <input className="input" type="text" name="title" value={title} onChange={handleChange} />
                <button className="button" type="submit">Create!</button>
            </form>
        </div>
    )
}