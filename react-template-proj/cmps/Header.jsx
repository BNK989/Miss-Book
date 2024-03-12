const { NavLink } = ReactRouterDOM
const { useNavigate } = ReactRouter

export function Header() {

	const navigate = useNavigate()

    return <header className="app-header flex align-center justify-between">
		<h1 onClick={()=> navigate('/')}>Miss Book</h1>
    	<nav className="app-nav flex">
		<NavLink to="/">Home</NavLink>
		<NavLink to="/about">About</NavLink>
		<NavLink to="/book">Books</NavLink>
		</nav>
    
	  </header>
}