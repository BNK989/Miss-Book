//React
const { Link } = ReactRouterDOM

//camp
import { LongTxt } from '../cmps/LongText.jsx';

//services
import { utilService } from '../services/util.service.js'

export function BookPreview({ book, onSel, onReturn, fullView}) {

    const priceClasses = () =>{
        let classList = ''
        if (book.listPrice.amount > 150) classList += 'red '
        if (book.listPrice.amount < 20) classList += 'green '
        if (book.listPrice.isOnSale) classList += 'sale '
        return classList.trim()
    }

  return (
          <Link className="book-preview" to={`/book/details/${book.id}`}><article onClick={() => {onSel && onSel(book)}}>
      {onReturn && <button onClick={onReturn}>BACK</button>}
      <h3>{book.title}</h3>
      <h5 className={`price-tag ${priceClasses()}`}>{utilService.formatCurrency(book.listPrice)}</h5>
      <img src={`assets/img/BooksImages/${book.thumbnail}`} alt={book.title} />
      <div className="actions">
        <button className="remove-btn" onClick={() => onRemove(book.id)}>
          X
        </button>

        <button className="view-btn">View Book</button>
        {fullView && <div className="tags">
          {book.categories.map(c => <span key={c}>{c}</span>)}
          </div>
          }
        {fullView && <div>{book.description}
        {book.pageCount}</div>}
        
        </div>
        {fullView && <LongTxt txt={book.description}/>}
    </article></Link>

  )
}
