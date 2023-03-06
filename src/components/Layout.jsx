import { Outlet } from "react-router-dom"
import NavBar from './navbar'
import Footer from './footer'

function Layout() {

    return(
        <>
            <NavBar />
            <Outlet></Outlet>
            <Footer/>
        </>
    )
}
export default Layout