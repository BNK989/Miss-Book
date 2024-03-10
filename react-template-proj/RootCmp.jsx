const { useState } = React

import { Nav } from './cmps/Nav.jsx'
import { Home } from './pages/Home-index.jsx'
import { About } from './pages/About-index.jsx'
import { Books } from './pages/Books-index.jsx'

export function App() {
  const [page, setPage] = useState('books')

  const onSetPage = (ev, page) => {
    ev.preventDefault()
    console.log(page)
    setPage(page)
  }

  return (
    <section className="app">
      <header className="app-header">
        <h1>Miss Book</h1>
        <Nav onSetPage={onSetPage} />
      </header>
      <main className="container">
        {page === 'home' && <Home />}
        {page === 'about' && <About />}
        {page === 'books' && <Books />}
      </main>
    </section>
  )
}
