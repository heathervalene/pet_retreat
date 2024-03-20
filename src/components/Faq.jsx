import {Link} from "react-router-dom";

const Faq = () => {
    return (
        <div>
            <h1 className="heading">Frequently Asked Questions</h1>
            <div className="container faq-list body-text">
            <h5 className="question">Can I schedule a meet & greet before my reservation?</h5>
            <h6 className="answer">Yes! In fact, we recommend it so your pup can meet us, check out the property and the other dogs.</h6>
            <h5 className="question">Do you have your own dogs?</h5>
            <h6 className="answer">Yes, we have 3 dogs ourselves: 2 Great Danes, Merlin and Sarafina and a Stafford Terrier, Milo.</h6>
            <h5 className="question">What if my dog doesn't get along with other dogs?</h5>
            <h6 className="answer">We do not keep any dogs seperated from each other, it's best your dog is friendly with other dogs to stay at the Pet Retreat.</h6>
            <h5 className="question">What types of dogs do you watch?</h5>
            <h6 className="answer">We cater to all dogs of shapes, sizes and ages. However, if your dog is a male he must be neutered.</h6>
            <h5 className="question">What are your rates?</h5>
            <h6 className="answer">We charge $40 per day/night per dog.</h6>
            <h5 className="question">Are the dogs left alone?</h5>
            <h6 className="amswer">While we both have other jobs, the dogs are left alone inside the house no more than 4 hours a day and we are home on the weekends</h6>
            <h5 className="question">What do I bring for overnight stays?</h5>
            <h6 className="answer">Bring your dog's food, treats, bedding and any medications.</h6>
            <h5 className="question">How do I know my dog is having a good time?</h5>
            <h6 className="answer">You have no worries when your dog stay with us, we will send you pictures and videos during their stay.</h6>
            </div>
            <div className="container body-text">
               <h5> Didn't find your answer? Feel free to <Link to="/contact">contact us</Link> and we'll get back to you as soon as possible.</h5>
            </div>
        </div>
    )
}

export default Faq;