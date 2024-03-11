//React
const {useState, useEffect} = React

//camp
import { BookPreview } from '../cmps/BookPreview.jsx'
import { BookView } from '../cmps/BookView.jsx'

//services


export function BookList({books}) {
    const [selectedBook, setSelectedBook] = useState('')

    return (
        <section className='book-list'>
            {!selectedBook &&books.map((book) => (
                <BookPreview key={book.id} book={book} onSel={()=>setSelectedBook(book)}/>
            ))}
            {/* {selectedBook && <BookView book={selectedBook} onReturn={()=> setSelectedBook('')}/>} */}
            {selectedBook && <BookPreview book={selectedBook} onReturn={()=> setSelectedBook('')}/>}
        </section>
    )
}