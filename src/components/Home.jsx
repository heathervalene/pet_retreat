import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="container home">
            <h1 className="heading">The Pet Retreat</h1>
            <h3 className="heading">Country Living for your Dogs</h3>
            <div className="body-text home-body"> Welcome to The Pet Retreat, where your furry friend's happiness is our top priority. Nestled on 5 acres of secure, fenced land, our dog boarding and daycare facility offers a haven for your beloved companions to roam, play, and splash to their hearts' content. With ample space for exploration and a pond for refreshing swims, our guests enjoy the ultimate canine retreat. Rest assured, your dogs receive personalized care, abundant exercise, and boundless affection, mirroring the love we have for our own furry family members. At The Pet Retreat, every wagging tail is treated like one of our own</div>
            <Link to ="/contact" className="btn btn-primary book">Book Now</Link>
        </div>
    )
}

export default Home;