import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activePath: 'home'
    };
  }

  render(){
    return (
      <div className="main-wrapper">
        <div className="container">
          <article className="box post">
            <a className="image featured"><img src="img/wine_banner.jpg" alt=""/></a>
            <section>
              <header>
                <h3>Your One-Stop Destination</h3>
                <p>Variety is what we’re about</p>
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
            <section>
              <header>
                <h3>Never Before Specials!</h3>
              </header>
              <p>
                When you’re looking for great deals and discounts, turn to the newest store on the block!
                At Ace Liquor & Wine, we have astonishing deals on your most loved liquor and wine brands.
                Our specials change from month to month so be updated with what our store has to offer you.
                From wines and champagne to whiskey and vodka our prices are unbelievable!
              </p>
            </section>
          </article>
        </div>
      </div>);
  }
}

export default Home