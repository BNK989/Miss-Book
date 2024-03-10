//React
const { useState, useEffect } = React

//camp

//services

export function BookFilter({ onSetFilter, filterBy }) {
  const [filterByToEdit, setFilterByToEdit] = useState(filterBy)

  useEffect(() => {
    onSetFilter(filterByToEdit)
  }, [filterByToEdit])

  function onFilter(ev) {
    ev.preventDefault()
    onSetFilter(filterByToEdit)
  }

  function handleChange({ target }) {
    let { value, name: field, type } = target
    if (type === 'number') value = +value
    setFilterByToEdit((prevFilterBy) => ({ ...prevFilterBy, [field]: value }))
    onSetFilter(filterByToEdit)
  }

  console.log('filterByToEdit', filterByToEdit)
  return (
    <section className="car-filter">
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

        <button>Filter</button>
      </form>
    </section>
  )
}
