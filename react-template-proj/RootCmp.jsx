const { useState } = React
const Router = ReactRouterDOM.HashRouter
const { Route, Routes } = ReactRouterDOM

import { Header } from './cmps/Header.jsx'
import { Home } from './pages/Home-index.jsx'
import { About } from './pages/About-index.jsx'
import { Books } from './pages/Books-index.jsx'

export function App() {

  
  const onSetPage = (ev, page) => {
    ev.preventDefault()

  }

  return (
    <Router>
      <section className="app">
        <Header />
        <main className="container">
          <Routes className="flex">
            <Route path="/" element={<Home />}>Home</Route>
            <Route path="/about" element={<About />}>
              About
            </Route>
            <Route path="/books" element={<Books />}>
              Books
            </Route>
          </Routes>
        </main>
      </section>
    </Router>
  )
}
