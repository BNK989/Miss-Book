//React Cmp Service
const { useRef } = React

const { Link, Outlet } = ReactRouterDOM

import { utilService } from "../services/util.service.js";


export function About() {

  const linkRef = useRef()

  const makeItBounce = () => {
    utilService.animateCSS(linkRef.current)
    .then(()=>console.log('animation done'))
  }

  return (
    <section>
      <h2 onClick={makeItBounce}>About Miss Book</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id maxime
        accusantium ea reiciendis autem soluta qui! Quasi voluptate veniam
        beatae ea fugiat minima! Doloremque eaque magnam distinctio deleniti,
        labore molestias.
      </p>

      <nav ref={linkRef} className="about-nav flex justify-center">
        <Link  to="/about/our-vision">Our Vision</Link>
        <Link to="/about/team">Our Team</Link>
      </nav>

      <Outlet/>
    </section>
  )
}
