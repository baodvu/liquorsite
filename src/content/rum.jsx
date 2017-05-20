import React, { Component } from 'react'

class Rum extends Component {
  render(){
    return (
      <div id="main-wrapper">
        <div className="container">
          <div className="row">
            <div className="12u">
              <section>
                <a className="image featured"><img src="img/rum.jpg" alt=""/></a>
                <div className="row">
                  <div className="6u 12u(mobile)">
                    <section className="box">
                      <header>
                        <h2>Rums that Have Changed the Way We Drink</h2>
                      </header>
                      <p>
                        Rum has been around for centuries; choose the one that you like best
                        from Ace Liquor & Wine in Nanuet. Our options include:
                      </p>
                      <ul>
                        <li>Bacardi</li>
                        <li>Captain Morgan</li>
                        <li>Malibu</li>
                        <li>Havana Club</li>
                        <li>Zacapa</li>
                        <li>Appleton</li>
                        <li>Mount Gay</li>
                        <li>El Dorado Rum</li>
                        <li>Light rums</li>
                        <li>Dark rums</li>
                        <li>Flavored rums</li>
                      </ul>
                    </section>
                  </div>

                  <div className="6u 12u(mobile)">
                    <section className="box">
                      <header>
                        <h2>Smooth and flavorful gins</h2>
                      </header>
                      <ul>
                        <li>Tanqueray</li>
                        <li>Beefeater</li>
                        <li>Bombay Sapphire</li>
                        <li>Gordon's</li>
                        <li>Martin Miller's</li>
                        <li>Sipsmith</li>
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

export default Rum