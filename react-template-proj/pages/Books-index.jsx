const { useEffect, useState } = React
const { Link } = ReactRouterDOM

import { BookList } from '../cmps/BookList.jsx'
import { BookFilter } from '../cmps/BookFilter.jsx'

import { bookService } from '../services/books.service.js'
export function Books() {
  const [books, SetBooks] = useState([])
  const [filterBy, setFilterBy] = useState(bookService.getDefaultFilter())

  useEffect(() => {
    bookService.query(filterBy)
      .then((books) => SetBooks([...books]))
  }, [filterBy])

  const loadBooks = () => {
    
    bookService.query(filterBy)
        .then((books) => {
            setBooks((prevBooks => [...prevBooks, ...books]))
        })
}

  const onSetFilter = (fieldsToUpdate) => { 
    setFilterBy(prevFilter => ({ ...prevFilter, ...fieldsToUpdate }))
  }
  if(!books) return <div>Loading...</div>
  return (
    <section>
      <h2>Books</h2>
      <BookFilter onSetFilter={onSetFilter} filterBy={filterBy} />
      <Link to="/books/add"><button >Add Book</button></Link>
      <BookList books={books} />
    </section>
  )
}
