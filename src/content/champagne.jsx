import React, { Component } from 'react'

class Champagne extends Component {
  render(){
    return (
      <div id="main-wrapper">
        <div className="container">
          <div className="row">
            <div className="12u">
              <section>
                <a className="image featured"><img src="img/champagne.jpg" alt=""/></a>
                <div className="row">
                  <div className="6u 12u(mobile)">
                    <section className="box">
                      <header>
                        <h2>Exquisite Champagne that Will Surely Please You</h2>
                      </header>
                      <p>
                        If you’re looking to spoil your special someone with some bubbly,
                        drop by our store today! Ace Liquor & Wine in Nanuet has a collection
                        of French and Californian champagne that are selected with care.
                      </p>
                      <p>
                        For the adventurous, we even have some exciting flavored champagne
                        for you to tempt your pallet with. Old or new, traditional or bold,
                        we have varieties you’ll appreciate.
                      </p>
                    </section>
                  </div>

                  <div className="6u 12u(mobile)">
                    <section className="box">
                      <header>
                        <h2>Popular French and Californian Champagnes</h2>
                      </header>
                      <ul>
                        <li>Moët & Chandon – French</li>
                        <li>Veuve Clicquot – French</li>
                        <li>Korbel – Californian (flavors are also available like Brut Rosé, Sweet Rosé, etc.)</li>
                        <li>Barefoot Bubbly – Californian (flavors also available like Peach fusion)</li>
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

export default Champagne