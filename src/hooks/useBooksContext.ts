import { useContext } from "react"
import { BooksContext } from "../context/Books"

export const useBooksContext = () => {
    return useContext(BooksContext)
}
