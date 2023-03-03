import { Link } from "react-router-dom"

function NavBar() {
    return(
        <nav>
            <Link to="/"  className="NavBarLinksLink" >
                <h3 className="NavBarLogo">#VANLIFE</h3>
            </Link>
            <div className="NavBarLinks">
                <Link className="NavBarLinksLink" to="/about">About</Link>
                <Link className="NavBarLinksLink" to="/vans">Vans</Link>
            </div>
        </nav>
    )
}

export default NavBar
