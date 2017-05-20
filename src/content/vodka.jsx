import React, { Component } from 'react'

class Vodka extends Component {
  render(){
    return (
      <div id="main-wrapper">
        <div className="container">
          <div className="row">
            <div className="12u">
              <section>
                <a className="image featured"><img src="img/vodka.jpg" alt=""/></a>
                <div className="row">
                  <div className="6u 12u(mobile)">
                    <section className="box">
                      <header>
                        <h2>Never Settle for Average Vodka</h2>
                      </header>
                      <p>
                        From flavored to unflavored, we have vodkas from around the world!
                        At Ace Liquor & Wine, we will delight you with our choices and prices.
                        Our special vodka of the month is the Swedish SVEDKA Vodka,
                        get this at a never before offer price of $18.99 for a 1.75 L bottle
                        (regular price is $23.99).
                      </p>
                      <p>
                        No matter what drink you prefer, we have it here at our shop. Visit us today!
                      </p>
                    </section>
                  </div>

                  <div className="6u 12u(mobile)">
                    <section className="box">
                      <header>
                        <h2>Come get your preferred vodka from us!</h2>
                      </header>
                      <ul>
                        <li>Grey Goose</li>
                        <li>Smirnoff</li>
                        <li>SVEDKA</li>
                        <li>SKYY</li>
                        <li>Absolut</li>
                        <li>Stolichnaya</li>
                        <li>Pinnacle</li>
                        <li>Ketel One</li>
                        <li>Belvedere</li>
                      </ul>
                    </section>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>);
  }
}

export default Vodka