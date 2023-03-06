import { useOutletContext } from "react-router-dom"

function HostVanDetailPricing() {
    const {currentVan } = useOutletContext()
    return(
        <div className="HostVanDetailPricingPage">
        <span>${currentVan.price}</span>/day
        </div>
    )
}
export default HostVanDetailPricing