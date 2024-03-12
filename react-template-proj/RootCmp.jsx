const { useState } = React
const Router = ReactRouterDOM.HashRouter
const { Route, Routes } = ReactRouterDOM

import { Header } from './cmps/Header.jsx'
import { Home } from './pages/Home-index.jsx'

import { About } from './pages/About-index.jsx'
import { Team } from './cmps/Team.jsx'
import { OurVision } from './cmps/OurVision.jsx'

import { Book } from './pages/Book-index.jsx'
import { BookView } from './pages/BookView.jsx'
import { AddBook } from './cmps/AddBook.jsx'
import { UserMsg } from './cmps/UserMsg.jsx'
import { AppFooter } from './cmps/AppFooter.jsx'

//const UserMsg = lazy(() => import('./cmps/UserMsg.jsx'))

export function App() {
  return (
    <Router>
      <section className="app">
        <Header />
        <main className="container">
          <Routes className="flex">
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />}>
              <Route path="/about/our-vision" element={<OurVision />} />
              <Route path="/about/team" element={<Team />} />
              <Route path="/about" element={<span>mt</span>} />
            </Route>
            <Route path="/book" element={<Book />} />
            <Route path="/book/details/:bookId" element={<BookView />} />
            <Route path="/book/add" element={<AddBook />} />
            <Route path="/book/add/:bookId" element={<AddBook />} />
            {/* <Route path="/book/edit" element={<Edit />}/> */}
          </Routes>
        </main>
        <AppFooter/>

        <UserMsg />
      </section>
    </Router>
  )
}
