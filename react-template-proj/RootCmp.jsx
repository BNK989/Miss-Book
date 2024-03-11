const { useState } = React
const Router = ReactRouterDOM.HashRouter
const { Route, Routes } = ReactRouterDOM

import { Header } from './cmps/Header.jsx'
import { Home } from './pages/Home-index.jsx'

import { About } from './pages/About-index.jsx'
import { Team } from './cmps/Team.jsx'
import { OurVision } from './cmps/OurVision.jsx'

import { Books } from './pages/Books-index.jsx'
import { BookView } from './cmps/BookView.jsx'
import { AddBook } from './cmps/AddBook.jsx'

export function App() {

  return (
    <Router>
      <section className="app">
        <Header />
        <main className="container">
          <Routes className="flex">
            <Route path="/" element={<Home />}/>
            <Route path="/about" element={<About />}>
                <Route path="/about/our-vision" element={<OurVision />}/>
                <Route path="/about/team" element={<Team />}/>
                <Route path="/about" element={<span>mt</span>}/>
            </Route>
            <Route path="/books" element={<Books />}/>
            <Route path="/book/details/:bookId" element={<BookView />}/>
            <Route path="/books/add" element={<AddBook />}/>
            {/* <Route path="/book/edit" element={<Edit />}/> */}
          </Routes>
        </main>
      </section>
    </Router>
  )
}
