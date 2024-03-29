

const Map = () => {

const apiKey = import.meta.env.VITE_GOOGLE_API_KEY
const center = '26.680626028879527, -81.75179300843806'
const zoom = 13
const size = "600x400"
const markers = 'color:red%7%7C26.680626028879527, -81.75179300843806'
const imageUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${center}&zoom=${zoom}&size=${size}&markers=${markers}&key=${apiKey}`

    return (
        <div >
            <img className="map-img" src={imageUrl} alt="map" />
        </div>
    )
}

export default Map;