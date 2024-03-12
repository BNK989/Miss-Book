//React
const { useEffect, useState } = React
const { useParams, useNavigate } = ReactRouter
const { Link } = ReactRouterDOM

//camp
import { AddReview } from '../cmps/AddReview.jsx'
import { ReviewsList } from '../cmps/ReviewsList.jsx'
import {ReviewPreview} from '../cmps/ReviewPreview.jsx'

//services
import { utilService } from '../services/util.service.js'
import { bookService } from '../services/book.service.js'

export function BookView() {
  //{ book, onReturn }) {

  const params = useParams()
  const [book, setBook] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [isOnReview, setIsOnReview] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    getBook()
  }, [params.bookId])

  const getBook = () => {
    setIsLoading(true)
    bookService
      .get(params.bookId)
      .then((book) => {
        setBook(book)
        console.log(book.siblings)
      })
      .catch((err) => {
        console.error("couldn't find book", err)
        navigate('/book')
      })
      .finally(() => setIsLoading(false))
  }

  function onAddReview(review) {
    bookService
      .addReview(book.id, review)
      .then((savedBook) => {
        setBook(savedBook)
        showSuccessMsg(`Review added successfully to ${savedBook.title}`)
      })
      .catch((err) => {
        console.log('Had issues with adding review:', err)
        showErrorMsg('Could not add review')
      })
      .finally(() => setIsOnReview(false))
  }

  function onRemoveReview(reviewId) {
    bookService
      .removeReview(book.id, reviewId)
      .then((savedBook) => {
        setBook(savedBook)
        showSuccessMsg(`Review removed successfully from ${savedBook.title}`)
      })
      .catch((err) => {
        console.log('Had issues with removing review:', err)
        showErrorMsg('Could not remove review')
      })
      .finally(() => setIsOnReview(false))
  }

  if (isLoading) return <h2>Loading...</h2>
  return (
    <article className="book-view">
      <Link to="/book">
        <button className="remove-btn btn">X</button>
      </Link>
      <h3>{book.title}</h3>
      <h5>{utilService.formatCurrency(book.listPrice)}</h5>
      <img src={`assets/img/BooksImages/${book.thumbnail}`} alt={book.title} />
      <p>{book.description}</p>
      <div className="actions flex justify-between">
        <Link to={`/book/details/${book.siblings.prevBookID}`}>
          <button>Prev</button>
        </Link>
        <Link to={`/book/add/${book.siblings.prevBookID}`}>
          <button>Edit Book</button>
        </Link>
        <Link to={`/book/details/${book.siblings.nextBookID}`}>
          <button>Next</button>
        </Link>
      </div>

      {book.reviews && book.reviews.length && (
        <ReviewsList book={book} onRemoveReview={onRemoveReview} />
      )}

      <button
        onClick={() => setIsOnReview((prevIsOnReview) => !prevIsOnReview)}
      >
        Add Review
      </button>
      {book.reviews && <ReviewPreview/>}
    </article>
  )
}
