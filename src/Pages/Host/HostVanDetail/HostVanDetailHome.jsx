import { useParams } from "react-router-dom"
import { useOutletContext } from "react-router-dom"

function HostVanDetailHome() {

    const {currentVan } = useOutletContext()

    return(
        <section className="HostVanDetailsHomeData">
            <h4><span>Name: </span>{currentVan.name}</h4>
            <h4><span>Category: </span>{currentVan.type}</h4>
            <h4><span>Description: </span>{currentVan.description}</h4>
            <h4><span>Visibility: </span>Public</h4>
        </section>
    )
}
export default HostVanDetailHome