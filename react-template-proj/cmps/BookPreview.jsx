//React

//camp

//services
import { utilService } from '../services/util.service.js'

export function BookPreview({ book, onSel}) {

  return (
    <article className="book-preview" onClick={() => onSel(book)}>
      <h3>{book.title}</h3>
      <h5 className="price-tag">{utilService.formatCurrency(book.listPrice)}</h5>
      <img src={`assets/img/BooksImages/${book.thumbnail}`} alt={book.title} />
      <div className="car-actions">
        <button className="remove-btn" onClick={() => onRemoveCar(car.id)}>
          X
        </button>
        {/* <button
          onClick={() => {
            onChangeSpeed(car)
          }}
        >
          Increase speed
        </button> */}
        <button
          onClick={() => {
            onSel(book)
          }}
        >
          View Book
        </button>
      </div>
    </article>
  )
}