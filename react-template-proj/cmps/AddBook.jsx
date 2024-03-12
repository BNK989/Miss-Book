const { useEffect, useState } = React
const { useNavigate, useParams } = ReactRouter

import { bookService } from '../services/books.service.js'
import { showErrorMsg, showSuccessMsg } from "../services/event-bus.service.js"

export function AddBook() {
  const [bookToEdit, setBookToEdit] = useState(bookService.getEmptyBook())
  const navigate = useNavigate()
  const { bookId } = useParams()
  console.log('book id', bookId)

  useEffect(() => {
    getBook()
  }, [bookId])

  const getBook = () => {
    bookService
      .get(bookId)
      .then((book) => {
        setBookToEdit((prevBook)=> {
            prevBook.price = book.listPrice.amount
            return {...prevBook, ...book}
        })
      })
      .catch((err) => {
          console.error("couldn't Save Book", err)
        //navigate('/books')
      })
      
  }

  const onSaveBook = (ev) => {
    ev.preventDefault()
    bookService
    .save(bookToEdit)
    .then((savedBook) => {
        console.log('book saved', savedBook)
        navigate('/books')
    })
    .then(showSuccessMsg('Book saved successfully'))
      .catch((err) => {
        console.error('error saving car', err)
      })
  }

  const handleChange = ({ target }) => {
    const field = target.name
    let value = target.value

    switch (target.type) {
      case 'number':
      case 'range':
        value = +value || ''
        break

      case 'checkbox':
        value = target.checked
        break

      default:
        break
    }

    setBookToEdit((prevBookToEdit) => ({ ...prevBookToEdit, [field]: value }))
  }

  const { title, price } = bookToEdit
  console.log('bookToEdit', bookToEdit)

  return (
    <form onSubmit={onSaveBook}>
      <label htmlFor="title">Title</label>
      <input
        type="text"
        name="title"
        required
        id="title"
        placeholder="title"
        onChange={handleChange}
        value={title}
      />

      <label htmlFor="price">Price</label>
      <input
        type="number"
        name="price"
        id="price"
        placeholder="0.00"
        required
        onChange={handleChange}
        value={price}
      />

      <button>Add</button>
    </form>
  )
}
