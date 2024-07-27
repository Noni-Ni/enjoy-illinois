import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <header className="roboto-regular">
            <Link to="/"><h2>Enjoy Illinois</h2></Link>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/catalog">Blogs</Link></li>
                    <li><Link to="/create">Add Post</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/register">Register</Link></li>
                    <li><Link to="/logout">Logout</Link></li>
                </ul>
            </nav>
        </header>
    )
}