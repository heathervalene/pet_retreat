import Map from './Map.jsx'

const About = () => {
    return (
        <div className="container">
        <h1 className="heading center">About Us</h1>
        <div className="row">
          <div className="col s12 m6">
            <img src="https://tropic-tails-farm.s3.us-east-2.amazonaws.com/headshots.png" className="responsive-img about-img" alt="headshots" />
          </div>
          <div className="col s12 m6">
            <div className="body-text about-body">
              <p>
                Mark and Guido have been long time dog lovers and caregivers, who treat each furry visitor as a member of their own family, ensuring they receive the same level of love, attention, and care that their beloved companions have always enjoyed. Their passion runs deep, stemming from a lifetime of companionship and care. Our property has been a haven for canine companionship with 10 cherished house dogs roaming freely into their golden years.
              </p>
            </div>
          </div>
        </div>
        <h4 className="heading location-header">Location</h4>
        <div className="row">
          <div className="col s12 m6">
            <div className="map-container">
              <Map />
            </div>
          </div>
          <div className="col s12 m6">
              <h4 className="body-text">Address:</h4>
              <p className="body-text address">4140 Orange River Loop Rd, Ft. Myers Florida 33905</p>
              <a href="https://www.google.com/maps/place/4140+Orange+River+Loop+Rd,+Fort+Myers,+FL+33905/@26.680396,-81.7544001,17z/data=!3m1!4b1!4m6!3m5!1s0x88db6eebfc143ba7:0x1e086a97743a26cb!8m2!3d26.680396!4d-81.7518252!16s%2Fg%2F11c1_qv85d?entry=ttu" target="_blank" rel="noreferrer"> <i></i> Get Directions</a>
              
              
            
          </div>
        </div>
        <div className='container'>
          <h4 className="body-text center">Look for the Welcome sign and black gate</h4>
                <img className="responsive-img gate" src="https://tropic-tails-farm.s3.us-east-2.amazonaws.com/frontsign2.jpg" alt='front'></img>
              </div>
      </div>
    )
}

export default About;