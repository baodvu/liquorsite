import React, { Component } from 'react'

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    return (
      <div>
        <section id="banner" className="bubbles">
          <div>
            <p style={{fontSize: '7em', fontWeight: '500', color: '#fffbe2', lineHeight:'100px'}}>WINE</p>
            <p style={{fontSize: '1.5em', fontWeight: '500', color: '#8fb754', letterSpacing:'8px'}}>TASTING EVENT</p>
            <div style={{width: '50%', margin: '25px auto', paddingTop: '10px', borderTop: '1px solid #8fb754'}}>
              <p style={{fontSize: '1.25em', fontWeight: '500', color: '#fffbe2'}}>FRIDAY, JUNE 2, 2017</p>
              <p style={{fontSize: '1.25em', fontWeight: '500', color: '#fffbe2'}}>10am - 6pm</p>
            </div>
          </div>
        </section>
        <div id="main-wrapper">
          <div className="container">
            <div className="row">
              <div className="12u">
                <section>
                  <div className="row">
                    <div className="6u 12u(mobile)">
                      <section className="box">
                        <a className="image featured"><img src="/img/02.jpg" alt=""/></a>
                        <header>
                          <h2>Your One-Stop Destination</h2>
                          <span>variety is what we’re about</span>
                        </header>
                        <p>
                          When you need to celebrate or relax, we know that a good drink goes a long way!
                          This is why our new store, Ace Liquor & Wine, aims to have every drink you need
                          for the occasion of your choice.
                          Our friendly and helpful staff will go out of their way to help you choose the right drink.
                          Whether you’re buying a drink for yourself, for a loved one, or even for your boss,
                          you’ll find what you need here!
                        </p>
                      </section>
                    </div>

                    <div className="6u 12u(mobile)">
                      <section className="box">
                        <a className="image featured"><img src="/img/03.jpg" alt=""/></a>
                        <header>
                          <h2>Never Before Specials!</h2>
                          <span>don't miss our sweet deals</span>
                        </header>
                        <p>
                          When you’re looking for great deals and discounts, turn to the newest store on the block!
                          At Ace Liquor & Wine, we have astonishing deals on your most loved liquor and wine brands.
                          Our specials change from month to month so be updated with what our store has to offer you.
                          From wines and champagne to whiskey and vodka our prices are unbelievable!
                        </p>
                      </section>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>);
  }
}

export default Home