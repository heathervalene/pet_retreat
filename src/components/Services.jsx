import {Link} from "react-router-dom";

const Services = () => {
    return (
        <div className="container">
    <div className="services">
      <h2 className="heading">Services</h2>
      <div className="service body-text">
        <h3>Boarding</h3>
        <p>At The Pet Retreat, we understand that extended absences can be tough, which is why we offer exceptional long-term boarding services for your beloved canine companions. Our expansive 5-acre fenced property provides a safe and secure environment where your dog can roam freely, play, and relax. Whether it's for a week or a month, rest assured your furry friend will receive personalized care, plenty of love, and attention, ensuring their stay with us is as comfortable and enjoyable as possible.</p>
      </div>
      <div className="service body-text">
        <h3>Daycare</h3>
        <p>Give your furry friend the ultimate day-care experience at The Pet Retreat! We offer a stimulating and fun-filled environment where dogs can socialize, exercise, and play under our watchful eye. Located on 5 acres of fenced land, our day-care guests have ample space to run, romp, and explore to their heart's content. Whether your pup needs a full day of fun or just a few hours of companionship, trust The Pet Retreat to provide the love and care they deserve.</p>
      </div>
      <Link to="/contact" className="btn btn-primary book">Book Now</Link>
    </div>
    </div>
  )
}

export default Services