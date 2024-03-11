//React

//camp

//services
import { utilService } from '../services/util.service.js'

export function BookView({ book, onReturn }) {
  
    return (
      <article className="book-view">
        <button className="remove-btn btn" onClick={()=> onReturn()}>X</button>
        <h3>{book.title}</h3>
        <h5>{utilService.formatCurrency(book.listPrice)}</h5>
        <img src={`assets/img/BooksImages/${book.thumbnail}`} alt={book.title} />
        <p>{book.description}</p>
      </article>
    )
  }