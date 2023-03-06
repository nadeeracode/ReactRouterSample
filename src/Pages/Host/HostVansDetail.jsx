import { useEffect, useState } from "react"
import { Link, NavLink, Outlet, useParams } from "react-router-dom"

function HostVansDetail() {
    const params = useParams()
    const vanId = params.id
    const [vanDisplayData, setVanDisplayData] = useState()
    const [currentVan, setCurrentVan] = useState(null)

    const activeStyle = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616",
    }

    useEffect(() => {
        fetch(`/api/host/vans/${vanId}`)
            .then(response => {
                if (response.ok) {
                    return response.json()
                }
                throw response
            })
            .then(data => {
                if (data.vans.length > 0) {
                    const van = data.vans[0]
                    setCurrentVan(van)
                    let vanType = van.type.charAt(0).toUpperCase() + van.type.slice(1)
                    const vanData = (
                        <div className="HostVansDetailBlock">
                            <img className="HostVansDetailBlockImage" src={van.imageUrl}/>
                            <div className="HostVansDetailBlockData">
                                <div className={`VansDetailBlockType${van.type}`}>{vanType}</div>
                                <div className="HostVanBlockTitle">{van.name}</div>
                                <div className="HostVanBlockPrice">${van.price}</div>
                            </div>
                        </div>
                    )
                    setVanDisplayData(vanData)
                }
            })
    }, [])

    if (!currentVan) {
        return <h1>Loading...</h1>
    }
    return(
        <div className="HostVansDetailPage">
            <NavLink to=".." relative="path">&larr; <span>Back to all vans</span></NavLink>
            <div className="HostVansDetailHeader">
                {vanDisplayData}
                <div className="HostVansDetailMenu">
                    <NavLink className="HostNavBarLinksLink" to="."
                        end
                        style={({isActive}) => isActive ? activeStyle : null }
                    >Details</NavLink>
                    <NavLink className="HostNavBarLinksLink" to={`pricing`}
                        style={({isActive}) => isActive ? activeStyle : null }
                    >Pricing</NavLink>
                    <NavLink className="HostNavBarLinksLink" to={`photos`}
                        style={({isActive}) => isActive ? activeStyle : null }
                    >Photos</NavLink>
                </div>
                <Outlet context={{currentVan}}></Outlet>
            </div>
        </div>

    )
}
export default HostVansDetail
