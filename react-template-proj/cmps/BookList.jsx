//React

//camp
import { BookPreview } from '../cmps/BookPreview.jsx'

//services

export function BookList({ books }) {
  return (
    <section className="book-list">
      {books.map((book) => (
        <BookPreview key={book.id} book={book} />
      ))}
    </section>
  )
}
