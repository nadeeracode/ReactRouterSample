import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import {Link} from 'react-router-dom'

function VanDetail() {
    const [curVanData, setCurrentVanData] = useState()
    const params = useParams()
    const vanId = params.id
    console.log(vanId)

    useEffect(() => {
        fetch(`/api/vans/${vanId}`)
            .then(response => {
                if (response.ok) {
                    return response.json()
                }
                throw response
            })
            .then(data => {
                console.log(data.vans)
                const van = data.vans
                
                    let vanType = van.type.charAt(0).toUpperCase() + van.type.slice(1)
                    console.log(vanType)
                    const vanData = (                        
                        <div className="VansDetailBlock" key={van.id}>
                            <Link to="/vans/" className="VansDetailBack"> Back to all vans</Link>
                            <img className="VansDetailBlockImage" src={van.imageUrl}/>
                            <div className="VansDetailBlockType">
                                <div className={`VansDetailBlockType${van.type}`}>{vanType}</div>
                            </div>
                            <h2 className="VansDetailBlockName">{van.name}</h2>
                            <h3 className="VansDetailBlockPrice">${van.price}/day</h3>
                            <p className="VansDetailBlockDescription">{van.description}</p>
                            <button className="VansDetailBlockButton" >Rent this van</button>
                       </div>
                    )
                setCurrentVanData(vanData)
            })
            .catch(error => {
                console.log("Error !", error);
            })
    }, [vanId])
    return(
        <div className="VansDetailPage">
            {curVanData}
        </div>
    )
}
export default VanDetail