import Map from './Map.jsx'

const About = () => {
    return (
        <div>
            <h1 className="heading">About Us</h1>
        <div className="container about-content">
            <img src="headshots.png" className="about-img" alt="headshots" />
           <div className="body-text about-body">
            Mark and Guido have been long time dog lovers and caregivers, who treat each furry visitor as a member of their own family, ensuring they receive the same level of love, attention, and care that their beloved companions have always enjoyed. Their passion runs deep, stemming from a lifetime of companionship and care. Our property has been a haven for canine companionship with 10 cherished house dogs roaming freely into their golden years. </div>
            <div className="map-container">
            <h4 className="body-text">Location</h4>
            <Map />
            <div className="address body-text">Address: 4140 Orange River Loop Rd, Ft. Myers Florida 33905</div>
            </div>
        </div>
        </div>
    )
}

export default About;