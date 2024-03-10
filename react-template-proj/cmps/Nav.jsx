export function Nav({onSetPage}) {

    return (
    <nav className="app-nav">
			<a href="" onClick={(ev) => onSetPage(ev, 'home')}>Home</a> |
			<a href="" onClick={(ev) => onSetPage(ev, 'about')}>About</a> |
			<a href="" onClick={(ev) => onSetPage(ev, 'books')}>Books</a>
		</nav>)
    
}