import {Link} from "react-router-dom";
import { useEffect } from "react";
import M from "materialize-css";

const Faq = () => {

 useEffect(() => {
    const collapsibles = document.querySelectorAll('.collapsible');
    M.Collapsible.init(collapsibles, {
      accordion: true
    }) }, []);
  

    return (
        <div>
            <div className="container">
            <h1 className="heading faq-header">Frequently Asked Questions</h1>
            <ul className=" collapsible body-text faq-list">
                <li>
            <h5 className="collapsible-header">Can I schedule a meet & greet before my reservation?</h5>
            <h6 className="collapsible-body">Yes! In fact, it is required before we accept the sitting, so your pup can meet us and check out the property and the other dogs.</h6>
            </li>
            <li>
            <h5 className="collapsible-header">Do you have your own dogs?</h5>
            <h6 className="collapsible-body">Yes, we have 3 dogs ourselves: 2 Great Danes, Merlin and Sarafina and a Stafford Terrier, Milo.</h6>
            </li>
            <li>
            <h5 className="collapsible-header">What if my dog doesn't get along with other dogs?</h5>
            <h6 className="collapsible-body">We do not keep any dogs seperated from each other, it's best your dog is friendly with other dogs to stay at Tropic Tails Farm.</h6>
            </li>
            <li>
            <h5 className="collapsible-header">What types of dogs do you watch?</h5>
            <h6 className="collapsible-body">We cater to all dogs of shapes, sizes and ages. However, if your dog is a male he must be neutered.</h6>
            </li>
            <li>
            <h5 className="collapsible-header">What are your rates?</h5>
            <h6 className="collapsible-body">Please check our <Link to="/pricing">pricing page.</Link> </h6>
            </li>
            <li>
            <h5 className="collapsible-header">Are the dogs left alone?</h5>
            <h6 className="collapsible-body">Someone is home at all times with the dogs.</h6>
            </li>
            <li>
            <h5 className="collapsible-header">Do you administer medicine?</h5>
            <h6 className="collapsible-body">Yes, we can give your dog medicine. Please provide detailed instructions on type and dosage.</h6>
            </li>
            <li>
            <h5 className="collapsible-header">What do I bring for overnight stays?</h5>
            <h6 className="collapsible-body">Bring your dog's food, treats, bedding and any medications. Please do not bring any toys.</h6>
            </li>
            <li>
            <h5 className="collapsible-header">How do I know my dog is having a good time?</h5>
            <h6 className="collapsible-body">You have no worries when your dog stays with us, we will send you pictures and videos during their stay.</h6>
            </li>
            </ul>
            <div className="container body-text">
               <h5> Didn't find your answer? Feel free to <Link to="/contact">contact us</Link> and we'll get back to you as soon as possible.</h5>
            </div>
            </div>
        </div>
    )
}

export default Faq;