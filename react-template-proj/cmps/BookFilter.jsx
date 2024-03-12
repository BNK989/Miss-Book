//React
const { useState, useEffect } = React

//camp
const { useSearchParams } = ReactRouterDOM

//services
import { bookService } from '../services/book.service.js'

export function BookFilter({ onSetFilter, filterBy }) {
  const [searchParams, setSearchParams] = useSearchParams()

  const [filterByToEdit, setFilterByToEdit] = useState(bookService.getFilterFromParams(searchParams))

  useEffect(() => {
    onSetFilter(filterByToEdit)
    setSearchParams(filterByToEdit)
  }, [filterByToEdit])

  function onFilter(ev) {
    ev.preventDefault()
    onSetFilter(filterByToEdit)
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

    setFilterByToEdit(prevFilterByToEdit => ({ ...prevFilterByToEdit, [field]: value }))
}

  //console.log('filterByToEdit', filterByToEdit)
  return (
    <section className="book-filter">
      <h2>Find Your Book</h2>

      <form onSubmit={onFilter}>
        <label htmlFor="Title">Title</label>
        <input
          type="text"
          id="Title"
          name="txt"
          value={filterByToEdit.txt}
          onChange={handleChange}
          placeholder="By Title"
        />

        <label htmlFor="maxPrice">Max Price</label>
        <input
          type="number"
          id="maxPrice"
          name="maxPrice"
          value={filterByToEdit.maxPrice}
          onChange={handleChange}
          placeholder="Max Price"
        />

        <button className="btn">Filter</button>
      </form>
    </section>
  )
}
