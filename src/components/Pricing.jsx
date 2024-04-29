

const Pricing = () => {
    return (
      <div className="container body-text center">
        <h1 className="heading">Pricing</h1>
        <div className="row">
          <div className="col s6">
            <div className='card pricing-card'>
        <h5 className="title">Long Term Boarding</h5>
        <h2 className="price">$40</h2>
        <p className="pricing-detail">This cost covers 1 dog, per 24 hour period. Your pup will be cared for as if they are our own. All dogs sleep inside at night, not kept in cages and are fed on their regular schedule.</p>
        <p className="pricing-detail">Available 7 days a week.</p>
        </div>
        </div>
        <div className="col s6 ">
          <div className="card">
        <h5 className="title">Daycare</h5>
        <h2 className="price">$30</h2>
        <p className="pricing-detail">This cost covers a drop off as early as 7:00am and pick-up by 6:00pm. Your pup will have open range of the farm to run, play and swim without being caged or leashed.</p>
        <p className="pricing-detail">Available 7 days a week.</p>
        </div>
        </div>
      </div>

      <h6 className='body-text center'>Payments Accepted: Cash or Check only.</h6>
      </div>
    )
}

export default Pricing


                            