import { Outlet } from "react-router-dom"
import { NavLink } from "react-router-dom"

function HostLayout() {
    const activeStyle = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616",
    }
    return(
        <>
            <div className="HostNavBarLinks">
                <NavLink className="HostNavBarLinksLink" to="."
                    end
                    style={({isActive}) => isActive ? activeStyle : null }
                    >
                        Dashboard
                    </NavLink>
                <NavLink className="HostNavBarLinksLink" to="income"
                    style={({isActive}) => isActive ? activeStyle : null }
                    >
                        Income
                    </NavLink>
                <NavLink className="HostNavBarLinksLink" to="vans"
                    style={({isActive}) => isActive ? activeStyle : null }
                    >
                        Vans
                    </NavLink>
                <NavLink className="HostNavBarLinksLink" to="reviews"
                    style={({isActive}) => isActive ? activeStyle : null }
                    >
                        Review
                    </NavLink>
            </div>
            <Outlet></Outlet>
        </>
   )
}
export default HostLayout