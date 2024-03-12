const { Link, Outlet } = ReactRouterDOM

import { OurVision } from './cmps/OurVision.jsx'
import { Team } from './cmps/Team.jsx'

export function About() {
  return (
    <section>
      <h2>About Miss Book</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id maxime
        accusantium ea reiciendis autem soluta qui! Quasi voluptate veniam
        beatae ea fugiat minima! Doloremque eaque magnam distinctio deleniti,
        labore molestias.
      </p>

      <nav className="about-nav flex justify-center">
        <Link to="/about/our-vision">Our Vision</Link>
        <Link to="/about/team">Our Team</Link>
      </nav>

      <Outlet/>
    </section>
  )
}
