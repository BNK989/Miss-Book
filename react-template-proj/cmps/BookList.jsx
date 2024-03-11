//React
const {useState, useEffect} = React

//camp
import { BookPreview } from '../cmps/BookPreview.jsx'
import { BookView } from '../cmps/BookView.jsx'

//services


export function BookList({books}) {

    return (
        <section className='book-list'>
            {books.map((book) => (
                <BookPreview key={book.id} book={book} />
            ))}
        </section>
    )
}