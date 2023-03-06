import { useEffect, useState } from "react"
import {Link} from 'react-router-dom'

function HostVans() {
    const [vanList, setVanList] = useState()

    useEffect(() => {
        fetch('/api/host/vans')
            .then(response => {
                //console.log(response)
                if (response.ok ) {
                    return response.json()
                }
                throw response
            })
            .then(data => {
                console.log(data)
                const vanList = data.vans.map(van => {
                    return(
                        <Link to={`/host/vans/${van.id}`} key={van.id}>
                            <div className="HostVanBlock">
                                <img className="HostVanBlockImage" src={van.imageUrl}/>
                                <div className="HostVanBlockDetail">
                                    <div className="HostVanBlockTitle">{van.name}</div>
                                    <div className="HostVanBlockPrice">${van.price}/day</div>
                                </div>
                            </div>
                        </Link>
                    )
                })
                setVanList(vanList)
            })
    }, [])
    return(
        <div className="HostVanPage">
            <div>
                <h3>Your listed vans</h3>
            </div>
            <div className="HostVanList">
                {vanList}
            </div>
        </div>
    )
}
export default HostVans