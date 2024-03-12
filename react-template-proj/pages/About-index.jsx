//React Cmp Service
const { useRef } = React

const { Link, Outlet } = ReactRouterDOM

import { utilService } from "../services/util.service.js";


export function About() {

  const linkRef = useRef()

  const cmps = ['Hello', 'Hello', 'GoodBye']

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
      <DynamicCmp cmpType={'GoodBye'} name={'Miss Book'}/>

      {
        cmps.map((cmp, idx) => <DynamicCmp key={idx} cmpType={cmp} name={'Ben'}/>)
      }
    </section>
  )
}


function DynamicCmp(props) {
  const extraProps = { extraData: 'asdasd' }
  switch (props.cmpType) {
      case 'Hello':
          return <Hello {...props} {...extraProps} />
      case 'GoodBye':
          return <GoodBye {...props} />
      case 'WelcomeBack':
          return <WelcomeBack {...props} />
  }
}


function Hello(props) {
  return <h1>Hello there {props.name}</h1>
}

function GoodBye({ name }) {
  return <h1>Bye {name}</h1>
}

function WelcomeBack({ name }) {
  return <h1>Welcome back {name}</h1>
}
