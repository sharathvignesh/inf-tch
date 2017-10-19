import React, { Component } from 'react'
// import './../Styles/postedLanding.css';

class Testimony extends Component {

  render () {
    return (
        <div id='tech-wrapper'>
          <h1>CUSTOMER TESTIMONALS</h1>
          <p>Serving happy customers globally, Infotech believe in
          building relationships, not just partnerships. They say it. We claim it.</p>
           <br />
           <div className='testimony-card'>
            <div className='testimony-client-details'>
             <img src={require('./testi/1.png')} alt='logo' />
               <h3>Ammenda Michle</h3>
               <h5>Gaming Apps Consultant at AppManias</h5>
               <h5>An iOS App Development Project</h5>
              </div>
              <div>
                <i className="fa fa-quote-left" aria-hidden="true"></i>
                 <p>
                    Great service, professional team members, and courteous sales representatives.
                     Loved their work and will definitely use Infotech’s services again.
                  </p>
              </div>
           </div>
           <div className='testimony-card'>
             <div className='testimony-client-details'>
              <img src={require('./testi/2.jpeg')} alt='logo' />
                <h3>Ammenda Michle</h3>
                <h5>Gaming Apps Consultant at AppManias</h5>
                <h5>An iOS App Development Project</h5>
               </div>
               <div>
               <i className="fa fa-quote-left" aria-hidden="true"></i>
                 <p>
                    Great service, professional team members, and courteous sales representatives.
                     Loved their work and will definitely use Infotech’s services again.
                  </p>
                </div>
           </div>
           <br />
           <hr />
        </div>
    )
  }
}

export default Testimony
