import { useOutletContext } from "react-router-dom"

function HostVanDetailPhoto() {
    const {currentVan } = useOutletContext()
    return(
        <div className="HostVanDetailPhotosPage">
            <img className="VansDetailBlockImage" src={currentVan.imageUrl}/>
        </div>
    )
}
export default HostVanDetailPhoto