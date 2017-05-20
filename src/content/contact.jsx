import React, { Component } from 'react'

class Contact extends Component {
  render(){
    return (
      <div id="main-wrapper">
        <div className="container">
          <div className="row">
            <div className="12u">
              <section>
                <iframe
                  width="100%"
                  height="450"
                  frameborder="0" style={{border:'0'}}
                  src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCipcGsUbPnpt-UXaFwRhCYCLGs5gEvs3c
                    &q=Ace+Liquor+And+Wine,Nanuet+NY" allowfullscreen>
                </iframe>
                <section className="box">
                  <header>
                    <h2>Contact Ace Liquor & Wine</h2>
                  </header>
                  <p>
                    No matter what your choice of liquor or wine is, we have a large selection available.
                    This new shop is filled with all kinds of alcohol at great prices.
                    For great deals check out our monthly specials!
                  </p>
                  <p>
                    <strong>Address:</strong><br/>
                    Ace Liquor & Wine<br/>
                    34 N Middletown Road, Nanuet, NY 10954
                  </p>
                  <p>
                    <strong>Email:</strong><br/>
                    newaceliquor@outlook.com
                  </p>
                  <p>
                    <strong>Phone:</strong><br/>
                    845-623-2157<br/>
                  </p>
                  <p>
                    <strong>Business Hours:</strong><br/>
                    Monday to Thursday - 11:00 AM to 9:00 PM<br/>
                    Friday and Saturday - 11:00 AM to 10:00 PM<br/>
                    Sunday - 12:00 PM to 7:00 PM
                  </p>
                </section>
              </section>
            </div>
          </div>
        </div>
      </div>);
  }
}

export default Contact