import React, { Component } from 'react'

class Liquor extends Component {
  render(){
    return (
      <div id="main-wrapper">
        <div className="container">
          <div className="row">
            <div className="12u">
              <section>
                <a className="image featured"><img src="img/liquor.jpg" alt=""/></a>
                <div className="row">
                  <div className="6u 12u(mobile)">
                    <section className="box">
                      <header>
                        <h2>It’s Tequila Time!</h2>
                      </header>
                      <p>
                        When you’re looking to get the party off to an awesome start, serve Tequila!
                        At Ace Liquor & Wine in Nanuet, we have all the old favorites for you to
                        choose from! Try our specials such as Sauza, Jose Cuervo and 1800.
                      </p>
                      <p>
                        Our top sellers include Patrón, El Jimador, Don Julio, and last
                        but not least Avión. These tequilas are a must for any wild night.
                      </p>
                    </section>
                  </div>

                  <div className="6u 12u(mobile)">
                    <section className="box">
                      <header>
                        <h2>Liquors that will lift your spirits</h2>
                      </header>
                      <ul>
                        <li>Fireball</li>
                        <li>Hennessy</li>
                        <li>Jägermeister</li>
                        <li>Apple Pucker</li>
                        <li>Bailey's Irish Cream</li>
                        <li>Frangelico</li>
                        <li>Kahlua</li>
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

export default Liquor