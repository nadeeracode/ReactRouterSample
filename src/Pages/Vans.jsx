
import { startTransition, useEffect, useState } from "react"
import {Link} from 'react-router-dom'

function Vans() {
    const [start, setStart] = useState(true)
    const [vanList, setVanList] = useState()

    useEffect(() => {
        fetch('/api/vans')
            .then(response => {
                if (response.ok) {
                    return response.json()
                }
                throw response
            })
            .then(data => {
                const vanList = data.vans.map(van => {
                    let vanType = van.type.charAt(0).toUpperCase() + van.type.slice(1)
                    return(                        
                        <div className="VansVanBlock" key={van.id}>
                            <Link to={`/vans/${van.id}`} >
                            <img className="VansVanBlockImage" src={van.imageUrl}/>
                            <div className="VansVanBlockNameRow" >
                                <h4 className="VansVanBlockName">{van.name}</h4>
                                <h4 className="VansVanBlockPrice">${van.price}</h4>
                            </div>
                            <div className="VansVanBlockButtonRow" >
                                <div className={`VansVanBlockType${van.type}`}>{vanType}</div>
                                <p className="VansVanBlockDay">/day</p>
                            </div>
                            </Link>
                        </div>
                    )
                })
                setVanList(vanList)
            })
            .catch(error => {
                console.log("Error !", error);
            })
    }, [])
    return(
        <div className="VansPage">
            <div className="VansPageHeader">
                <h2>Explore our van options</h2>
                <div className="VansPageHeaderFilters">
                    <div className="VanPageHeaderType">Simple</div>
                    <div className="VanPageHeaderType">Luxury</div>
                    <div className="VanPageHeaderType">Rugged</div>
                    <a className="VansPageHeaderClearFilters">Clear Filter</a>
                </div>
            </div>
            <div className="VanPageTiles">
                {vanList}
            </div>
        </div>
    )
}

export default Vans