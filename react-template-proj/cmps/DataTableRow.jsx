const { useState, Fragment } = React
const { Link } = ReactRouterDOM

import { utilService } from '../services/util.service.js'

export function DataTableRow({ book, onRemovebook, setExpandedRowId, expandedRowId }) {
    // const [isExpanded, setIsExpanded] = useState(false)


    const isExpanded = book.id === expandedRowId
    console.log('isExpanded', isExpanded)

    return <Fragment>
        <tr>
            <td className="toggle-expand" onClick={() => {
                //  setIsExpanded((prev) => !prev)
                setExpandedRowId(book.id)
            }}>
                {isExpanded ? "-" : "+"}
            </td>
            <td>{book.title}</td>
            <td>{book.authors}</td>
            <td>${ book.listPrice.amount}</td>
            <td>
                <Link to={`/book/${book.id}`}>Details</Link> |
                <Link to={`/book/edit/${book.id}`}>Edit</Link>
            </td>
        </tr>
        {
            isExpanded && <tr>
                <td colSpan="5" className="book-info">
                    <h5>{book.vendor}</h5>
                    <img src={`https://robohash.org/${book.id}`} style={{ maxWidth: '50px' }} />
                    <p>{book.title}s are best for lorem ipsum dolor</p>
                    <button onClick={() => onRemovebook(book.id)}>Remove book</button>
                </td>
            </tr>
        }
    </Fragment>

}
