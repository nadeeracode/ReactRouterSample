import { Link, NavLink } from "react-router-dom"

function NavBar() {
    const activeStyle = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "black",
    }
    return(
        <nav>
            <Link to="/"  className="NavBarLinksLink" >
                <h3 className="NavBarLogo">#VANLIFE</h3>
            </Link>
            <div className="NavBarLinks">
                <NavLink className="NavBarLinksLink" 
                    to="/host"
                    style={({isActive}) => isActive ? activeStyle : null }
                >
                    Host
                </NavLink>
                <NavLink className="NavBarLinksLink" 
                    to="/about"
                    style={({isActive}) => isActive ? activeStyle : null }
                >
                    About
                </NavLink>
                <NavLink className="NavBarLinksLink" 
                    to="/vans"
                    style={({isActive}) => isActive ? activeStyle : null }
                >
                    Vans
                </NavLink>
            </div>
        </nav>
    )
}

export default NavBar
