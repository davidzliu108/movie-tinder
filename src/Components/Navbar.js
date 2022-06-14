import {Link} from "react-router-dom"

export default function Navbar() {
    const path = window.location.pathname
    return <nav className="nav">
        <a href="/" className="site-title">Film Select</a>
        <ul>
            <CustomLink href="/search">Search</CustomLink>
            <CustomLink href="select">Select</CustomLink>
        </ul>
    </nav>
}

function CustomLink({href, children, ...props}) {
    const path = window.location.pathname
    return (
        <li className = {path===href ? "active" : ""}>
            <a href={href}>{children}</a>
        </li>
    )
}