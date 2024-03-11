//React
const { useEffect, useState } = React
const {useParams, useNavigate} = ReactRouter
const { Link } = ReactRouterDOM

//camp

//services
import { utilService } from '../services/util.service.js'
import { bookService } from '../services/books.service.js'

export function BookView(){//{ book, onReturn }) {

  const params = useParams()
  const [book, setBook] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    getBook()
  },[params.bookId])

  const getBook = () => {
    bookService.get(params.bookId)
    .then(book => {
      setBook(book)
      console.log(book.siblings)
      setIsLoading(false)
    })
    .catch(err => {
      console.error('couldn\'t find book', err)
      navigate('/books')
    })
    //.finally(() => setIsLoading(false))
  }


  

    if(isLoading) return <h2>Loading...</h2>
    return (
      <article className="book-view">
        <Link to="/books"><button className="remove-btn btn">X</button></Link>
        <h3>{book.title}</h3>
        <h5>{utilService.formatCurrency(book.listPrice)}</h5>
        <img src={`assets/img/BooksImages/${book.thumbnail}`} alt={book.title} />
        <p>{book.description}</p>
        <div className="actions flex justify-between">
          <Link to={`/book/details/${book.siblings.prevBookID}`}><button>Prev</button></Link>
          <Link to={`/book/details/${book.siblings.nextBookID}`}><button>Next</button></Link>
        </div>
      </article>
    )
  }